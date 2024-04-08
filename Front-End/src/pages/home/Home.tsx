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
	const [products, setProducts] = useState<IProductFullDTO[]>([]);
	const [exploreProducts, setExploreProducts] = useState<IProductFullDTO[]>([]);
	const [firstEightProducts, setFirstEightProducts] = useState<IProductFullDTO[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		setIsLoading(true);
		productService.findAll().then((data) => {
			setProducts(data);

			const firstEightProducts = data.slice(0, 8);
			const exploreProducts = data.slice(0, 15);

			setExploreProducts(exploreProducts);
			setFirstEightProducts(firstEightProducts);
			setIsLoading(false);
		}).catch(() => handleLogout());
	}, []);

	return (
		<>
			<GlobalLayout>
				<HomeContainer>
					<TitleContainer>
						<Title Type="sm">Inicio</Title>
						<Subtitle>Seja bem vindo a FarmaCristo!</Subtitle>
					</TitleContainer>

					<ProductTrend>
						<div className="title">
							<h2>Principais produtos</h2>
							<Link to="/search">Ver tudo</Link>
						</div>

						<ProductContainer Type="start">
							{
								isLoading ?
									<LoadingContainer className="adjustable">
										<Spinner />
									</LoadingContainer>
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

					<ProductTrend>
						<div className="title">
							<h2>Principais de Farmacristo</h2>
							<Link to="/search">Ver tudo</Link>
						</div>

						<ProductContainer Type="start">
							{
								isLoading ?
									<LoadingContainer className="adjustable">
										<Spinner />
									</LoadingContainer>
								:
									<div></div>
							}
						</ProductContainer>

						<div className="blur toright"></div>
						<div className="blur toleft"></div>
					</ProductTrend>

					<ProductTrend>
						<div className="title">
							<h2>Principais de Farmacristo 2</h2>
							<Link to="/search">Ver tudo</Link>
						</div>


						<ProductContainer Type="start">
							{
								isLoading ?
									<LoadingContainer className="adjustable">
										<Spinner />
									</LoadingContainer>
								:
									<div></div>
							}
						</ProductContainer>

						<div className="blur toright"></div>
						<div className="blur toleft"></div>
					</ProductTrend>

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
