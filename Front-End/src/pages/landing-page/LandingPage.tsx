
import { Header } from "../../components/header";
import { WhatsappWidget } from "../../components/whatsapp-widget";

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
	Container,
	WomanImage,
	TitleGreen,
	CardContainer,
	SubtitleGreen,
	TextsContainer,
	SectionOneContainer,
	TextsGreenContainer,
	SectionTwoContainer,
} from "./styles";
import styled from "styled-components";

const SectionThreeContainer = styled.section`
	padding: 5rem 0; /* 80px and 0 */
`;

const LandingPage = (): React.ReactElement => {
    return(
        <Container>
            <Header />

						<SectionOneContainer>
							<TextsContainer>
								<Title>Descubra o Poder da Saúde<br /><span>com a FarmaCristo.</span></Title>
								<Subtitle>Oferecemos uma seleção excepcional de <span>produtos dedicados ao seu bem-estar.</span></Subtitle>
							</TextsContainer>

							<WomanImage src={ WomanImageSVG } alt="Brown Medical Woman" />
						</SectionOneContainer>

						<SectionTwoContainer>
							<TextsGreenContainer>
								<TitleGreen>Sua saúde em boas mãos.</TitleGreen>
								<SubtitleGreen>Nosso catálogo de produtos oferece <span>o item certo para cada ocasião.</span></SubtitleGreen>
							</TextsGreenContainer>

							<CardContainer>
								<Card className="red">
									<img src={FirstAidKitPNG} alt="First Aid Kit" />
									<span>Primeiros socorros</span>
								</Card>
								<Card className="blue">
									<img src={HerbalPNG} alt="First Aid Kit" />
									<span>Vitaminas e Suplementos</span>
								</Card>
								<Card className="orange">
									<img src={PrescriptionPNG} alt="First Aid Kit" />
									<span>Prescrições médicas</span>
								</Card>
								<Card className="green">
									<img src={PersonalHygienePNG} alt="First Aid Kit" />
									<span>Cuidados pessoais</span>
								</Card>
								<Card className="pink">
									<img src={PediatricsPNG} alt="First Aid Kit" />
									<span>Cuidados com bebês</span>
								</Card>
							</CardContainer>
						</SectionTwoContainer>

						<SectionThreeContainer>
							<TextsGreenContainer>
								<TitleGreen>Produtos em destaque</TitleGreen>
								<SubtitleGreen>Explore agora um dos nossos produtos em destaque.</SubtitleGreen>
							</TextsGreenContainer>
						</SectionThreeContainer>
						<WhatsappWidget/>
        </Container>
    );
}

export { LandingPage };
