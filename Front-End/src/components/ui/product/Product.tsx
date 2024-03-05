import { CreatinaPNG } from "../../../assets/images/images";

/* UI */
import { Price } from "../price/Price";
import { OldPrice } from "../price/old-price/OldPrice";
import { ProductButton } from "../button/product-button/ProductButton";
import { ButtonsContainer } from "../containers/buttons-container/ButtonsContainer";

import { PricesContainer, ProductContainer, ProductImage, ProductPressableArea, ProductTitle, PromotionContainer } from "./styles";
import { getDefaultNumber } from "../../../services/DTO/utils /Numbers.utils";

interface IProductProps {
	product?: IProductFullDTO,
	changeModalVisibility: (product?: IProductFullDTO) => void
}

const Product = ({ product, changeModalVisibility }: IProductProps) => {
	
	const handleClick = (product?: IProductFullDTO) => {
		changeModalVisibility(product);
	}
	
	return (
		<ProductContainer>
			{
				product?.infos != undefined && product.infos.promotionalPrice !== product.infos.price && 
				<PromotionContainer>
					{
						((parseFloat(getDefaultNumber(product.infos.price)) - parseFloat(getDefaultNumber(product.infos.promotionalPrice))) / parseFloat(getDefaultNumber(product.infos.price)) * 100).toFixed(0)
					}
					% OFF
				</PromotionContainer>
			}
			<ProductPressableArea onClick={ () => handleClick(product) }>
				<ProductImage src={ product?.image || CreatinaPNG } alt={`Imagem do medicamento ou produto ${ product?.infos.name }`} loading="lazy"/>

				<ProductTitle className="overflow-hidden">{ product?.infos.name ||  "Creatina 100% creapure (150G) - Nutrata" }</ProductTitle>

				<PricesContainer>
					{
						product?.infos.promotionalPrice === product?.infos.price ?
							<Price Price={ product?.infos.price || "R$ 172,99" }/>
						:
							<>
								<Price Price={ product?.infos.promotionalPrice || "R$ 172,99" }/>
								<OldPrice OldPrice={ product?.infos.price || "R$ 199,99" }/>	
							</>
					}
				</PricesContainer>
			</ProductPressableArea>

			<ButtonsContainer>
				<ProductButton Type="shopping-cart"/>
				<ProductButton Type="whatsapp"/>
			</ButtonsContainer>
		</ProductContainer>
	);
}

export { Product };
