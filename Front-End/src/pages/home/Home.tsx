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

const Home = (): React.ReactElement => {

	useDinamicTitle("Inicio");

	return (
		<GlobalLayout>
			<HomeContainer>
				<TitleContainer>
					<Title Type="sm">Inicio</Title>
					<Subtitle>Seja bem vindo a FarmaCristo!</Subtitle>
				</TitleContainer>

				<ProductTrend>
					<div className="title">
						<h2>Principais produtos</h2>
						<a>Ver tudo</a>
					</div>

					<ProductContainer Type="start">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</ProductContainer>

					<div className="blur toright"></div>
					<div className="blur toleft"></div>
				</ProductTrend>

				<ProductTrend>
					<div className="title">
						<h2>Cuidados pessoais</h2>
						<a>Ver tudo</a>
					</div>

					<ProductContainer Type="start">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</ProductContainer>

					<div className="blur toright"></div>
					<div className="blur toleft"></div>
				</ProductTrend>

				<ProductTrend>
					<div className="title">
						<h2>Vitaminas e suplementos</h2>
						<a>Ver tudo</a>
					</div>


					<ProductContainer Type="start">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</ProductContainer>

					<div className="blur toright"></div>
					<div className="blur toleft"></div>
				</ProductTrend>

				<div className="products-grid">
					<TitleContainer Type="center">
						<Title Type="sm green">Explore</Title>
						<Subtitle Type="xl green">Veja todos os produtos das nossas lojas!</Subtitle>
					</TitleContainer>
					<a className="right">Ver tudo</a>
					<ProductsGridContainer>
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</ProductsGridContainer>
				</div>
			</HomeContainer>
		</GlobalLayout>
	);
};

export { Home };
