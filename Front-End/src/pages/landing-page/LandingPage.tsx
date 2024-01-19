import { useLayoutEffect, useState } from "react";

import { gsap } from "gsap";
import { Header } from "../../components/header";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContainer } from "../styles/global";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { WhatsappWidget } from "../../components/whatsapp-widget";

/* UI */
import { Hr } from "../../components/ui/hr/Hr";
import { Product } from "../../components/ui/product/Product";
import { Title as TitleComponent } from "../../components/ui/title/Title";
import { Subtitle as SubtitleComponent } from "../../components/ui/subtitle/Subtitle";
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
	Elipse,
	Subtitle,
	WomanImage,
	SubtitleGreen,
	CardContainer,
	SignUpContainer,
	JoinUsDescription,
	SectionOneContainer,
	SectionTwoContainer,
	SectionFourContainer,
	JoinUsTextsContainer,
	SectionThreeContainer,
	SectionFourContainerFlex,
} from "./styles";

import { Button } from "../../components/ui/button/Button";
import { InputContainer } from "../../components/ui/containers/input-container/InputContainer";
import { Label } from "../../components/ui/label/Label";
import { Input } from "../../components/ui/input/Input";
import { InputsFlex } from "../../components/ui/containers/inputs-flex/InputsFlex";

const LandingPage = (): React.ReactElement => {
	useDinamicTitle("Explore");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

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

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to("#four", {
			opacity: 1,
			scrollTrigger: {
				trigger: "#four",
				start: "top 500px"
			}
		});

		return () => {
			gsap.killTweensOf("#four");
		}
	}, []);

	return (
		<>
			<GlobalContainer>
				<Header />

				<SectionOneContainer id="one">
					<div className="text-container">
						<TitleContainer Type="xxl title">
							<Title>Descubra o Poder da Saúde<br /><span>com a FarmaCristo.</span></Title>
							<Subtitle>Oferecemos uma seleção excepcional de <span>produtos dedicados ao seu bem-estar.</span></Subtitle>
						</TitleContainer>
					</div>

					<WomanImage src={WomanImageSVG} alt="Uma médica, mulher, morena com cabelos cacheados de braço cruzado" />
				</SectionOneContainer>

				<SectionTwoContainer id="two">
					<TitleContainer Type="xl center">
						<TitleComponent Type="sm green extra-bold">Sua saúde em boas mãos.</TitleComponent>
						<SubtitleGreen>Nosso catálogo de produtos oferece <span>o item certo para cada ocasião.</span></SubtitleGreen>
					</TitleContainer>

					<CardContainer>
						<div className="scrollable">
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
						</div>

						<div className="blur toright"></div>
						<div className="blur toleft"></div>
					</CardContainer>
				</SectionTwoContainer>
			</GlobalContainer>

			<SectionThreeContainer id="three">
				<GlobalContainer className="products-grid">
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
					</GlobalContainer>
				</SectionThreeContainer>

			<SectionFourContainer id="four">
				<Elipse className="yellow lg"/>
				<Elipse className="red xl"/>
				<Elipse className="pink xl"/>

				<GlobalContainer>
					<SectionFourContainerFlex>
						<JoinUsTextsContainer>
							<div className="title-container">
								<TitleComponent Type="sm white extra-bold">Junte-se a nós</TitleComponent>
								<Elipse className="green-60 sm"/>
							</div>
							<JoinUsDescription>
								Junte-se a nós na jornada de cuidado e dedicação à saúde!
								<br/><br/>Na <span>rede FarmaCristo</span>, acreditamos que cada indivíduo desempenha um papel crucial em nossa missão de oferecer serviços farmacêuticos excepcionais à comunidade.
								<br/><br/>Valorizamos a integridade, a inovação e o compromisso com a excelência.
							</JoinUsDescription>
						</JoinUsTextsContainer>

						<Hr Type="white vertical" />

						<div className="sign-up-container">
							<SignUpContainer>
								<TitleContainer>
									<TitleComponent Type="sm extra-bold">Cadastre-se</TitleComponent>
									<SubtitleComponent>Campos obrigatórios marcados com <span>*</span></SubtitleComponent>
								</TitleContainer>

								<form>
									<InputsFlex Type="no-margin">
										<InputContainer>
											<Label Type="bold green sm" For="name" Required={ true }>Nome e sobrenome</Label>
											<Input
												Id="name"
												Type="text"
												Value={ name }
												Required={ true }
												SetValue={(e) => setName(e.target.value)}
												Placeholder="Ex.: Fernando Gabriel"
											/>
										</InputContainer>

										<InputContainer>
											<Label Type="bold green sm" For="name" Required={ true }>E-mail</Label>
											<Input
												Id="email"
												Type="email"
												Value={ email }
												Required={ true }
												SetValue={(e) => setEmail(e.target.value)}
												Placeholder="Ex.: exemplo@exemplo.com"
											/>
										</InputContainer>

										<InputContainer>
											<Label Type="bold green sm" For="name" Required={ true }>Passsword</Label>
											<Input
												Id="password"
												Type="password"
												Value={ password }
												Required={ true }
												SetValue={(e) => setPassword(e.target.value)}
												Placeholder="Ex.: YourPassword1234#"
											/>
										</InputContainer>
									</InputsFlex>
								
									<Button Type="submit" ButtonType="save">
										Cadastrar
									</Button>
								</form>
							</SignUpContainer>

							<Elipse className="green lg"/>
						</div>
					</SectionFourContainerFlex>
				</GlobalContainer>
			</SectionFourContainer>

			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			<WhatsappWidget />
		</>
	);
}

export { LandingPage };
