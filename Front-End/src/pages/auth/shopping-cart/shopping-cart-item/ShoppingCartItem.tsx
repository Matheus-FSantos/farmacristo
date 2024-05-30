import { useState } from "react";
import { toast } from "react-toastify";
import { useTimeout } from "../../../../hooks/useTimeout";
import { AuthService } from "../../../../services/Auth.service";
import { ShoppingCartService } from "../../../../services/ShoppingCart.service";

/* UI */
import { Price } from "../../../../components/ui/price/Price";
import { OldPrice } from "../../../../components/ui/price/old-price/OldPrice";
import { ProductTitle } from "../../../../components/ui/title/product-title/ProductTitle";
import { ProductButton } from "../../../../components/ui/button/product-button/ProductButton";
import { PricesContainer } from "../../../../components/ui/containers/prices-container/PricesContainer";
import { ButtonsContainer } from "../../../../components/ui/containers/buttons-container/ButtonsContainer";

import { Icon, IconAndInfos, InfosContainer, ProductDescription, ShoppingCartItemContainer } from "./styles";

interface IShoppingCartItemProps {
	Product: IProductFullDTO
}

const ShoppingCartItem = ({ Product }: IShoppingCartItemProps) => {

	const authService = new AuthService();
	const shoppingCartService = new ShoppingCartService();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleDeleteItem = () => {
		setIsLoading(true);

		try {
			const credentials = authService.getCredentials();
			const id = credentials.id;
			const login = {
				email: credentials.email,
				password: credentials.password
			};

			const alert = toast.loading("Por favor, aguarde...");
			shoppingCartService.removeProduct(id, Product.infos.id, login).then(async _ => {
				toast.update(alert, {
					render: "Produto deletado, aguarde...",
					type: "success",
					isLoading: false,
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				await useTimeout(2000);
				window.location.reload();
			});
		} catch {
			handleLogout();
		}
	}

	const handleLogout = () => {
		authService.logout();
		window.location.reload();
	}
	
	return (
		<ShoppingCartItemContainer>
			<IconAndInfos>
				<Icon src={ Product.image }/>

				<InfosContainer>
					<div>
						<ProductTitle Title={ Product.infos.name } />
						<ProductDescription>{ Product.infos.description }</ProductDescription>
					</div>
					<PricesContainer>
						<Price Price={ Product.infos.promotionalPrice }/>
						<OldPrice OldPrice={ Product.infos.price } />
					</PricesContainer>
				</InfosContainer>
			</IconAndInfos>
			
			<div className="buttons">
				<ButtonsContainer>
					<a
						href={`https://api.whatsapp.com/send?phone=5515996181099&text=Ol%C3%A1!%20%F0%9F%91%8B%20Tenho%20interesse%20em%20comprar%20o%20produto%3A%20${ Product.infos.name }%2C%20pode%20me%20ajudar%3F%20%F0%9F%A4%94`}
						target="_blank"
					>
						<ProductButton Type="whatsapp" IsDisabled={ isLoading } />
					</a>
					<ProductButton Type="remove" OnClick={ handleDeleteItem } IsDisabled={ isLoading } />
				</ButtonsContainer>
			</div>
		</ShoppingCartItemContainer>
	);
}
export { ShoppingCartItem };
