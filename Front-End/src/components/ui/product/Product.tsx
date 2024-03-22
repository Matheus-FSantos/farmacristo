import { useState } from "react";
import { getDefaultNumber } from "../../../services/DTO/utils /Numbers.utils";

/* UI */
import { Price } from "../price/Price";
import { OldPrice } from "../price/old-price/OldPrice";
import { ProductButton } from "../button/product-button/ProductButton";
import { ButtonsContainer } from "../containers/buttons-container/ButtonsContainer";

import {
	ProductTitle,
	ProductBrand,
	ProductImage,
	PricesContainer,
	ProductContainer,
	ProductPresentIn,
	ModalProductImage,
	ProductDescription,
	PromotionContainer,
	ProductPressableArea,
	ProductInfosContainer,
	ProductLocationContainer,
	ProductPrescriptionIsRequired,
} from "./styles";

import { Modal } from "../../modal/Modal";
import { Container } from "../containers/Container";
interface IProductProps {
	product?: IProductFullDTO,
	noOpen?: boolean | false
}

const Product = ({ product, noOpen }: IProductProps) => {
	
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	const handleClick = () => {
		if(!noOpen)
			setIsOpenModal(!isOpenModal);
	}
	
	return (
		<>
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
				<ProductPressableArea onClick={ handleClick }>
					<ProductImage src={ product?.image || "" } alt={`Imagem do medicamento ou produto ${ product?.infos.name }`} loading="lazy"/>

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
		
			<Modal isOpen={ isOpenModal } onRequestClose={ handleClick }>
					{
							product?.infos !== undefined
						&&
							<Container>
								<Container Type="no-padding flex column center justify-center gap-40">
									<ModalProductImage src={ product?.image } alt={`Imagem do medicamento ou produto ${ product?.infos.name }`} loading="lazy" />
									<Container Type="no-padding flex column justify-start gap-10 w-100">
										<ProductInfosContainer>
											<ProductTitle className="title xl">{ product?.infos.name }</ProductTitle>

											<ProductBrand>
												{ product?.infos.brand }
												{
													product.infos.prescriptionIsRequired === true && <ProductPrescriptionIsRequired>Prescrição requerida</ProductPrescriptionIsRequired> 
												}
											</ProductBrand>

											<ProductDescription>
												Descrição: { product.infos.description }
											</ProductDescription>

											<ProductLocationContainer>
												<ProductPresentIn>- Este produto está presente em:</ProductPresentIn>
												{
													product.infos.pharmacies.map(pharmacy => <ProductPresentIn className="pharmacy">📍 { pharmacy.name }</ProductPresentIn>)
												}
											</ProductLocationContainer>

											<PricesContainer>
												{
													product.infos.promotionalPrice === product.infos.price ?
														<Price Price={ product.infos.price }/>
													:
														<>
															<Price Price={ product.infos.promotionalPrice }/>
															<OldPrice OldPrice={ product.infos.price }/>	
														</>
												}
											</PricesContainer>
										</ProductInfosContainer>

										<ButtonsContainer>
											<ProductButton Type="shopping-cart"/>
											<ProductButton Type="whatsapp"/>
										</ButtonsContainer>
									</Container>
								</Container>
							</Container>
					}
				</Modal>
		</>
	);
}

export { Product };
