import { useDinamicTitle } from "../../hooks/useDinamicTitle";

/* UI */
import { Title } from "../../components/ui/title/Title";
import { Product } from "../../components/ui/product/Product";
import { Subtitle } from "../../components/ui/subtitle/Subtitle";
import { TitleContainer } from "../../components/ui/containers/title-container/TitleContainer";
import { ProductContainer } from "../../components/ui/containers/product-container/ProductContainer";
import { ProductsGridContainer } from "../../components/ui/containers/products-grid-container/ProductsGridContainer";

import { GlobalLayout } from "../../layout/global/GlobalLayout";

import { HomeContainer, ProductTrend } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/Products.service";
import { AuthService } from "../../services/Auth.service";
import { LoadingContainer } from "../search/styles";
import { Spinner } from "../../components/ui/spinner";
import { Toast } from "../../components/toast";

const Home = (): React.ReactElement => {
	useDinamicTitle("Inicio");

	const navigate = useNavigate();
	const authService = new AuthService();

	const productService = new ProductService();
	const [exploreProducts, setExploreProducts] = useState<IProductFullDTO[]>([]);
	const [groupedProducts, setGroupedProducts] = useState<IPharmacyProductDTO[]>([]);
	const [firstEightProducts, setFirstEightProducts] = useState<IProductFullDTO[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		setIsLoading(true);
		productService.findAll().then((data) => {
			const products: IProductFullDTO[] = data;

			const firstEightProducts = data.slice(0, 8);
			const exploreProducts = data.slice(0, 15);

			setExploreProducts(exploreProducts);
			setFirstEightProducts(firstEightProducts);

			const groupedProducts: IPharmacyProductDTO[] = [];
			products.forEach(product => {
				product.infos.pharmacies.forEach(pharmacy => {
					const existingPharmacyIndex = groupedProducts.findIndex(p => p.pharmacy === pharmacy.name);
					if (existingPharmacyIndex !== -1) {
						groupedProducts[existingPharmacyIndex].products.push(product);
					} else {
						groupedProducts.push({
							pharmacy: pharmacy.name,
							products: [product]
						});
					}
				});
			});


			setGroupedProducts(groupedProducts);
			setIsLoading(false);
		}).catch(() => handleLogout());
	}, []);

	return (
		<>
			<GlobalLayout>
				<HomeContainer>
					<ProductTrend>
						<div className="title">
							<h2>Principais produtos</h2>
							<Link to="/search">Ver tudo</Link>
						</div>

						<ProductContainer Type="start">
							{
								isLoading ?
									<LoadingContainer className="center">
										<Spinner />
									</LoadingContainer>
								:
									firstEightProducts.length === 0 ?
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												minHeight: "300px",
												width: "100%",
											}}
										>
											<p style={{ textAlign: "center", fontSize: "1rem", fontWeight: "600", color: "var(--gray-700)" }}>Nenhum produto encontrado!</p>
										</div>
									: 
										firstEightProducts.map(product => 
											<Product
												key={ product.infos.id }
												product={ product }
											/>
										)
							}
						</ProductContainer>

						<div className="blur toright"></div>
						<div className="blur toleft"></div>
					</ProductTrend>
					{
						groupedProducts.map(group => 
							<ProductTrend
								key={ group.pharmacy }
							>
								<div className="title">
									<h2>Principais de { group.pharmacy }</h2>
									<Link to="/search">Ver tudo</Link>
								</div>

								<ProductContainer Type="start">
									{
										group.products.slice(0, 8).map(product => 
											<Product
												key={ product.infos.id }
												product={ product }
											/>
										)
									}
								</ProductContainer>

								<div className="blur toright"></div>
								<div className="blur toleft"></div>
							</ProductTrend>
						)
					}

					<div className="products-grid">
						<TitleContainer Type="center">
							<Title Type="sm green">Explore</Title>
							<Subtitle Type="xl green">Veja todos os produtos das nossas lojas!</Subtitle>
						</TitleContainer>
						<Link to="/search">Ver tudo</Link>
						{
							isLoading ?
								<LoadingContainer className="adjustable">
									<Spinner />
								</LoadingContainer>
							:
								exploreProducts.length === 0 ?
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											minHeight: "300px",
											width: "100%",
										}}
									>
										<p style={{ textAlign: "center", fontSize: "1rem", fontWeight: "600", color: "var(--gray-700)" }}>Nenhum produto encontrado!</p>
									</div>
								:
									<ProductsGridContainer className="padding-20">
										{
												exploreProducts.map(product => 
													<Product
														key={ product.infos.id }
														product={ product }
													/>
												)
										}
									</ProductsGridContainer>
						}
					</div>
				</HomeContainer>
			</GlobalLayout>
			
			<Toast />
		</>
	);
};

export { Home };
