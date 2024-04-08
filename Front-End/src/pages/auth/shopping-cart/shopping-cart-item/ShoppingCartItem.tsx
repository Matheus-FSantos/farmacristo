import { CreatinaPNG } from "../../../../assets/images/images";

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
					<ProductButton Type="whatsapp" />
					<ProductButton Type="remove" />
				</ButtonsContainer>
			</div>
		</ShoppingCartItemContainer>
	);
}
export { ShoppingCartItem };
