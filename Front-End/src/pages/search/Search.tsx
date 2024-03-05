import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";

import { ProductService } from "../../services/Products.service";
import { AuthService } from "../../services/Auth.service";

import { Modal } from "../../components/modal/Modal";

/* UI */
import { Spinner } from "../../components/ui/spinner";
import { Title } from "../../components/ui/title/Title";
import { Price } from "../../components/ui/price/Price";
import { Product } from "../../components/ui/product/Product";
import { Subtitle } from "../../components/ui/subtitle/Subtitle";
import { ProductTitle } from "../../components/ui/product/styles";
import { Container } from "../../components/ui/containers/Container";
import { OldPrice } from "../../components/ui/price/old-price/OldPrice";
import { ProductButton } from "../../components/ui/button/product-button/ProductButton";
import { TitleContainer } from "../../components/ui/containers/title-container/TitleContainer";
import { PricesContainer } from "../../components/ui/containers/prices-container/PricesContainer";
import { ButtonsContainer } from "../../components/ui/containers/buttons-container/ButtonsContainer";
import { ProductsGridContainer } from "../../components/ui/containers/products-grid-container/ProductsGridContainer";

import { GlobalLayout } from "../../layout/global/GlobalLayout";

import {
	ProductBrand,
	SearchContainer,
	LoadingContainer,
	ModalProductImage,
	ProductDescription,
	ProductInfosContainer,
	ProductPrescriptionIsRequired,
	ProductPresentIn,
	ProductLocationContainer,
} from "./styles";
import { Input } from "../../components/ui/input/Input";

const Search = () => {
	useDinamicTitle("Pesquisa");

	const navigate = useNavigate();
	const authService = new AuthService();
	const productService = new ProductService();
	const [products, setProducts] = useState<IProductFullDTO[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filter, setFilter] = useState<string>("");

	const [clickedProduct, setClickedProduct] = useState<IProductFullDTO>(
		{
			image: "",
			infos: {
				id: "",
				name: "",
				brand: "",
				price: "",
				pharmacies: [],
				description: "",
				promotionalPrice: "",
				prescriptionIsRequired: false
			}
		}
	); 
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);


	const changeModalVisibility = (product?: IProductFullDTO) => {
		if (product !== undefined)
			setClickedProduct(product);
		
		setIsOpenModal(!isOpenModal);
	}

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		setIsLoading(true);
		productService.findAll().then((data) => {
			setProducts(data);
			setIsLoading(false);
		}).catch(() => {
			handleLogout();
		});
	}, []);

	return (
		<GlobalLayout>
			{
				isLoading ?
					<LoadingContainer>
						<Spinner />
					</LoadingContainer>
				:
					<SearchContainer>
						<TitleContainer>
							<Title Type="sm">Buscar</Title>
							<Subtitle>Ache o produto que deseja em nossas farmácias!</Subtitle>
						</TitleContainer>

						<Input Type="text" Placeholder="Pesquise aqui..." Value={ filter } SetValue={ (e) => setFilter(e.target.value) }/>

						<ProductsGridContainer>
								{
									!filter ?
										products.map(product => 
											<Product
												key={ product.infos.id }
												product={ product }
												changeModalVisibility={ changeModalVisibility }
											/>
										)
									:
										products.filter(product => product.infos.name.toLowerCase().includes(filter.toLowerCase() + "")).map(product => 
											<Product
												key={ product.infos.id }
												product={ product }
												changeModalVisibility={ changeModalVisibility }
											/>
										)
								}
							</ProductsGridContainer>
					</SearchContainer>
			}

				<Modal isOpen={ isOpenModal } onRequestClose={ changeModalVisibility }>
					{
							clickedProduct.infos !== undefined
						&&
							<Container>
								<Container Type="no-padding flex column center justify-center gap-40">
									<ModalProductImage src={ clickedProduct.image } alt={`Imagem do medicamento ou produto ${ clickedProduct.infos.name }`} loading="lazy" />
									<Container Type="no-padding flex column justify-start gap-10 w-100">
										<ProductInfosContainer>
											<ProductTitle className="title xl">{ clickedProduct.infos.name }</ProductTitle>

											<ProductBrand>
												{ clickedProduct.infos.brand }
												{
													clickedProduct.infos.prescriptionIsRequired === true && <ProductPrescriptionIsRequired>Prescrição requerida</ProductPrescriptionIsRequired> 
												}
											</ProductBrand>

											<ProductDescription>
												Descrição: { clickedProduct.infos.description }
											</ProductDescription>

											<ProductLocationContainer>
												<ProductPresentIn>- Este produto está presente em:</ProductPresentIn>
												{
													clickedProduct.infos.pharmacies.map(pharmacy => <ProductPresentIn className="pharmacy">📍 { pharmacy.name }</ProductPresentIn>)
												}
											</ProductLocationContainer>

											<PricesContainer>
												{
													clickedProduct.infos.promotionalPrice === clickedProduct.infos.price ?
														<Price Price={ clickedProduct.infos.price }/>
													:
														<>
															<Price Price={ clickedProduct.infos.promotionalPrice }/>
															<OldPrice OldPrice={ clickedProduct.infos.price }/>	
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
		</GlobalLayout>
	);
}

export { Search };
