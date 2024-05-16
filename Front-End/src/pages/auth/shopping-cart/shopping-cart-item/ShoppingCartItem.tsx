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
					<ProductButton Type="whatsapp" IsDisabled={ isLoading } />
					<ProductButton Type="remove" OnClick={ handleDeleteItem } IsDisabled={ isLoading } />
				</ButtonsContainer>
			</div>
		</ShoppingCartItemContainer>
	);
}
export { ShoppingCartItem };
