import { CreatinaPNG } from "../../../assets/images/images";
import { PricesContainer, Product as ProductComponent, ProductImage, ProductTitle } from "./styles";

/* UI */
import { Price } from "../price/Price";
import { OldPrice } from "../price/old-price/OldPrice";
import { ProductButton } from "../button/product-button/ProductButton";
import { ButtonsContainer } from "../containers/buttons-container/ButtonsContainer";
import { PriceAndButtonsContainer } from "../containers/price-and-buttons-container/PriceAndButtonsContainer";

const Product = () => {
	return (
		<ProductComponent>
			<ProductImage src={ CreatinaPNG } alt="Imagem de um medicamento e/ou produto" loading="lazy"/>

			<ProductTitle className="title">Creatina 100% creapure (150G) - Nutrata</ProductTitle>

			<PriceAndButtonsContainer>
				<PricesContainer>
					<Price Price="R$ 172,90"/>
					<OldPrice OldPrice="R$ 199,99"/>
				</PricesContainer>

				<ButtonsContainer>
					<ProductButton Type="shopping-cart"/>
					<ProductButton Type="whatsapp"/>
				</ButtonsContainer>
			</PriceAndButtonsContainer>
		</ProductComponent>		
	);
}

export { Product };
