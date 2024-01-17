import { ProductContainer } from "../../components/ui/containers/product-container/ProductContainer";
import { ProductsGridContainer } from "../../components/ui/containers/products-grid-container/ProductsGridContainer";
import { TitleContainer } from "../../components/ui/containers/title-container/TitleContainer";
import { Product } from "../../components/ui/product/Product";
import { Subtitle } from "../../components/ui/subtitle/Subtitle";
import { Title } from "../../components/ui/title/Title";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../layout/global/GlobalLayout";

import styled from "styled-components";

const ProductTrend = styled.section`
	display: flex;
	flex-direction: column;

	position: relative;
	
	gap: 20px;

	div.title {
		position: relative;
		z-index: 1;

		display: flex;
		align-items: center;
		justify-content: space-between;

		h2 {
			font-weight: 700;
		}
	}

	div.blur {
		position: absolute;
		top: 0;
		
		width: 30px;
		height: 100%;
	}

	div.toright {
		right: 0;

		background: linear-gradient(to right, transparent, white);
	}

	div.toleft {
		left: 0;

		background: linear-gradient(to left, transparent, white);		
	}
`;

const HomeContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 40px;

	a {
		font-weight: 600;
		font-size: 0.9rem;

		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}

	div.products-grid {
		width: 100%;

		display: flex;
		flex-direction: column;
		
		align-items: center;
		justify-content: center;

		gap: 50px;

		a {
			width: 100%;
			text-align: end;
		}
	}
`;

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
