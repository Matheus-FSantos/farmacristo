import { ShoppingCartItem } from "../shopping-cart-item";

/* UI */
import { Hr } from "../../../../components/ui/hr/Hr";

import styled from "styled-components";
import { ProductTitle } from "../../../../components/ui/title/product-title/ProductTitle";
import { useEffect, useState } from "react";
import { AuthService } from "../../../../services/Auth.service";
import { ProductService } from "../../../../services/Products.service";
import { ShoppingCartService } from "../../../../services/ShoppingCart.service";
import { LoadingContainer } from "../../../search/styles";
import { Spinner } from "../../../../components/ui/spinner";

const ShoppingCartItemListContainer = styled.section`
	width: 100%;
`;

const ItemList = styled.section`
	display: flex;
	flex-direction: column;

	gap: 5px; /* 5px */

	min-height: 500px;
	height: 100%;

	@media only screen and (max-width: 612px) {
		gap: 20px;
	}
`;

const TotalContainer = styled.section`
	display: flex;
	align-items: end;

	padding-right: 3.75rem; /* 60px */

	gap: 0.625rem; /* 10px */

	span.price {
		font-weight: 700;
		font-size: 1.5rem;

		color: var(--green-700);
	}
`;

const ShoppingCartItemList = () => {
	
	const authService = new AuthService();
	const productService = new ProductService();
	const shoppingCartService = new ShoppingCartService();

	const [total, setTotal] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [products, setProducts] = useState<IProductFullDTO[]>([]);

	useEffect(() => {
		setIsLoading(true);

		try {
			const credentials = authService.getCredentials();
			const id = credentials.id;
			const login = {
				email: credentials.email,
				password: credentials.password
			};

			shoppingCartService.findAllProducts(id, login).then((shoppingCartInfos) => {
				productService.findAll().then(products => {
					const finalProducts: IProductFullDTO[] = [];
					
					products.forEach((product) => {
						shoppingCartInfos.products.forEach((shoppingCartProduct) => {
							if(product.infos.id === shoppingCartProduct.id)
								finalProducts.push(product);
						});
					});

					setProducts(finalProducts);
					setIsLoading(false);
				});

				setTotal(shoppingCartInfos.total);
			}).catch((error) => { console.log(error) });
		} catch (error) {

		}
	}, []);

	
	return (
		<ShoppingCartItemListContainer>
			<ItemList>
				{
					isLoading ?
						<LoadingContainer>
							<Spinner />
						</LoadingContainer>
					:
						products.length === 0 ?
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "450px",
									width: "100%"
								}}
							>
								<p style={{ textAlign: "center", fontSize: "1rem", fontWeight: "600", color: "var(--gray-700)" }}>Seu carrinho está vazio!</p>
							</div>
						: 
							products.map((product) => <ShoppingCartItem key={ product.infos.id } Product={ product } />)
				}
			</ItemList>

			<Hr />

			<TotalContainer>
				<ProductTitle Title="Total:" Type="xl" />
				<span className="price">{ isLoading ? "Calculando..." : total }</span>
			</TotalContainer>
		</ShoppingCartItemListContainer>
	);
}

export { ShoppingCartItemList };
