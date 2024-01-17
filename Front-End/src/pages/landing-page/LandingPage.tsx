import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { Header } from "../../components/header";
import { WhatsappWidget } from "../../components/whatsapp-widget";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalContainer } from "../styles/global";

/* UI */
import { Product } from "../../components/ui/product/Product";
import { Title as TitleComponent } from "../../components/ui/title/Title";
import { TitleContainer } from "../../components/ui/containers/title-container/TitleContainer";
import { ProductsGridContainer } from "../../components/ui/containers/products-grid-container/ProductsGridContainer";

import {
	HerbalPNG,
	WomanImageSVG,
	PediatricsPNG,
	FirstAidKitPNG,
	PrescriptionPNG,
	PersonalHygienePNG,
} from "../../assets/images/images";

import {
	Card,
	Title,
	Subtitle,
	WomanImage,
	CardContainer,
	SubtitleGreen,
	SectionOneContainer,
	SectionTwoContainer,
	SectionThreeContainer,
} from "./styles";

const LandingPage = (): React.ReactElement => {

	useDinamicTitle("Explore");

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to("#two", {
			opacity: 1,
			scrollTrigger: {
				trigger: "#two",
				start: "top 700px"
			}
		});

		return () => {
			gsap.killTweensOf("#two");
		}
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to("#three", {
			opacity: 1,
			scrollTrigger: {
				trigger: "#three",
				start: "top 500px"
			}
		});

		return () => {
			gsap.killTweensOf("#three");
		}
	}, []);

	return (
		<GlobalContainer>
			<Header />

			<SectionOneContainer id="one">
				<TitleContainer Type="xxl">
					<Title>Descubra o Poder da Saúde<br /><span>com a FarmaCristo.</span></Title>
					<Subtitle>Oferecemos uma seleção excepcional de <span>produtos dedicados ao seu bem-estar.</span></Subtitle>
				</TitleContainer>

				<WomanImage src={WomanImageSVG} alt="Uma médica, mulher, morena com cabelos cacheados de braço cruzado" />
			</SectionOneContainer>

			<SectionTwoContainer id="two">
				<TitleContainer Type="xl center">
					<TitleComponent Type="sm green extra-bold">Sua saúde em boas mãos.</TitleComponent>
					<SubtitleGreen>Nosso catálogo de produtos oferece <span>o item certo para cada ocasião.</span></SubtitleGreen>
				</TitleContainer>

				<CardContainer>
					<Card className="red">
						<img src={FirstAidKitPNG} alt="Imagem que representa um kit de primeiros socorros, em vermelho" loading="lazy"/>
						<span>Primeiros socorros</span>
					</Card>
					<Card className="blue">
						<img src={HerbalPNG} alt="Imagem que representa uma caixa de vitaminas e suplementos, em azul" loading="lazy"/>
						<span>Vitaminas e Suplementos</span>
					</Card>
					<Card className="orange">
						<img src={PrescriptionPNG} alt="Imagem que representa uma prescrição médica, em laranja" loading="lazy"/>
						<span>Prescrições médicas</span>
					</Card>
					<Card className="green">
						<img src={PersonalHygienePNG} alt="Imagem que representa cuidados pessoas, em verde" loading="lazy"/>
						<span>Cuidados pessoais</span>
					</Card>
					<Card className="pink">
						<img src={PediatricsPNG} alt="Imagem que representa cuidados com bebê (uma mão com um bebê em cima), em rosa" loading="lazy"/>
						<span>Cuidados com bebês</span>
					</Card>
				</CardContainer>
			</SectionTwoContainer>

			<SectionThreeContainer id="three">
				<TitleContainer Type="xl center">
					<TitleComponent Type="sm green extra-bold">Produtos em destaque</TitleComponent>
					<SubtitleGreen className="thirdSection">Explore agora um dos nossos produtos em destaque.</SubtitleGreen>
				</TitleContainer>

				<div className="products-grid">
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
			</SectionThreeContainer>
			<WhatsappWidget />
		</GlobalContainer>
	);
}

export { LandingPage };
