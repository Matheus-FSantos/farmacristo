import { CreatinaPNG } from "../../../../assets/images/images";

/* UI */
import { Price } from "../../../../components/ui/price/Price";
import { OldPrice } from "../../../../components/ui/price/old-price/OldPrice";
import { ProductTitle } from "../../../../components/ui/title/product-title/ProductTitle";
import { ProductButton } from "../../../../components/ui/button/product-button/ProductButton";
import { PricesContainer } from "../../../../components/ui/containers/prices-container/PricesContainer";
import { ButtonsContainer } from "../../../../components/ui/containers/buttons-container/ButtonsContainer";

import { Icon, IconAndInfos, InfosContainer, ProductDescription, ShoppingCartItemContainer } from "./styles";

const ShoppingCartItem = () => {
	return(
		<ShoppingCartItemContainer>
			<IconAndInfos>
				<Icon src={ CreatinaPNG }/>

				<InfosContainer>
					<div>
						<ProductTitle Title="Creatina 100% creapure (150G) - Nutrata"/>
						<ProductDescription>A CREATINA Probiótica, traz o aminoácido creatina na concentração e purezada exclusiva tecnologia alemã CREAPURE®. A CREATINA auxilia no aumento do desempenho físico durante exercícios repetidos de curta duração e alta intensidade, além de ajudar a complementar os estoques endógenos de creatina.</ProductDescription>
					</div>
					<PricesContainer>
						<Price Price="R$ 172,90"/>
						<OldPrice OldPrice="R$ 199,99" />
					</PricesContainer>
				</InfosContainer>
			</IconAndInfos>
			
			<div className="buttons">
				<ButtonsContainer>
					<ProductButton Type="shopping-cart" />
					<ProductButton Type="whatsapp" />
				</ButtonsContainer>
			</div>
		</ShoppingCartItemContainer>
	);
}
export { ShoppingCartItem };
