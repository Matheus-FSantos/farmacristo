import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
	background-color: var(--black-900);
	padding: 40px;
`;

const FooterMainContentContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 20px;

	@media only screen and (max-width: 668px) {
		gap: 40px
	}
`;

const TitleAndContentContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 45px;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;

	gap: 4px;
	align-items: baseline;
	
	@media only screen and (max-width: 668px) {
		align-items: center;
		flex-direction: column;
	}
`;

const TitleFooter = styled.p`
	font-size: 42px;
	font-weight: 700;

	color: var(--white-1000);

	@media only screen and (max-width: 750px) {
		font-size: 32px;
	}
`;

const SubtitleFooter = styled.p`
	font-size: 10px;
	font-weight: 700;
	
	color: var(--gray-150);
`;

const DescriptionAndLinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	gap: 80px;

	@media only screen and (max-width: 750px) {
		gap: 40px;
	}

	@media only screen and (max-width: 668px) {
		flex-direction: column;
	}
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 15px;
`;

const DescriptionFooter = styled.p`
	font-size: 10px;
	text-align: justify;

	color: var(--white-1000);

	width: 334px;

	@media only screen and (max-width: 668px) {
		text-align: center;
	}
`;

const VerticalHr = styled.div`
	width: 1px;
	height: 220px;

	background-color: var(--white-1000);
	border-radius: 1000px;

	@media only screen and (max-width: 668px) {
		max-width: 220px;
		width: 100%;
		height: 1px;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 24px;
`;

const LinkTitle = styled.p`
	font-size: 20px;
	font-weight: 600;

	color: var(--white-1000);

	@media only screen and (max-width: 750px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 668px) {
		text-align: center;
	}
`;

const UlContainer = styled.ul`
	display: flex;
	flex-direction: column;

	gap: 10px;

	@media only screen and (max-width: 668px) {
		text-align: center;
	}
`;

const LinkItem = styled.li`
	color: var(--white-1000);
	font-size: 1rem;
	font-weight: 500;

	&:hover {
		list-style: circle;
		text-decoration: underline;
	}

	@media only screen and (max-width: 750px) {
		font-size: 14px;
	}
`;

const SignUpContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	gap: 15px;
`;

const SignUpText = styled.p`
	font-size: 16px;
	font-weight: 600;
	color: var(--white-1000);

	@media only screen and (max-width: 750px) {
		font-size: 14px;
	}

	@media only screen and (max-width: 410px) {
		font-size: 12px;
	}
`;

const SignUpButton = styled.button`
	font-size: 12px;
	font-weight: 600;
	color: var(--white-1000);

	background-color: transparent;
	border: 1px solid var(--white-1000);

	width: 120px;
	height: 35px;
	border-radius: 20px;

	@media only screen and (max-width: 410px) {
		width: 100px;
		height: 30px;
	}
`;

const CopyrightContainer = styled.div`
	background-color: var(--black-950);
	padding: 20px;
	display: flex;
	justify-content: center;
`;

const CopyrightText = styled.p`
	font-size: 1rem;
	color: var(--gray-150);
	
	@media only screen and (max-width: 750px) {
		font-size: 14px;
	}

	@media only screen and (max-width: 410px) {
		font-size: 12px;
	}
`;


const Footer = (): React.ReactElement => {
	return (
		<>
			<FooterContainer>
				<FooterMainContentContainer>
					<TitleAndContentContainer>
						<TitleContainer>
							<TitleFooter>Farmacristo</TitleFooter>
							<SubtitleFooter>Rede de farmácias</SubtitleFooter>
						</TitleContainer>

						<DescriptionAndLinksContainer>
							<DescriptionContainer>
								<DescriptionFooter>
									Bem-vindo à rede FarmaCristo, onde cuidar da sua saúde é a nossa prioridade. Comprometemo-nos a oferecer produtos farmacêuticos de qualidade, atendimento personalizado e o suporte necessário para o seu bem-estar. Conte conosco para ser a sua parceira de confiança em saúde. FarmaCristo, porque a sua saúde é o nosso compromisso.
								</DescriptionFooter>

								<DescriptionFooter>
									Na FarmaCristo, acreditamos que a jornada para uma vida saudável vai além dos medicamentos. Oferecemos uma variedade de produtos e serviços, desde cuidados com a pele até orientações sobre estilo de vida saudável. Nossa equipe dedicada está aqui para ajudar você a alcançar e manter o equilíbrio em todas as áreas da sua saúde. Confie na FarmaCristo para estar ao seu lado, cuidando de você a cada passo do caminho.
								</DescriptionFooter>
							</DescriptionContainer>

							<VerticalHr />

							<LinkContainer>
								<LinkTitle>Links:</LinkTitle>
								<UlContainer>
									<LinkItem><Link to="/">Inicio</Link></LinkItem>
									<LinkItem><Link to="/explore">Explore</Link></LinkItem>
									<LinkItem><Link to="/shopping-cart">Seu carrinho</Link></LinkItem>
									<LinkItem><Link to="/careers">Trabalhe conosco</Link></LinkItem>
									<LinkItem><Link to="/search">Pesquisa de produtos</Link></LinkItem>
								</UlContainer>
							</LinkContainer>
						</DescriptionAndLinksContainer>
					</TitleAndContentContainer>

					<SignUpContainer>
						<SignUpText>Registre-se gratuitamente:</SignUpText>
						<Link to="/signup">
							<SignUpButton>Cadastre-se</SignUpButton>
						</Link>
					</SignUpContainer>
				</FooterMainContentContainer>
			</FooterContainer>
			<CopyrightContainer>
				<CopyrightText>© 2023 Copyright: Rede FarmaCristo</CopyrightText>
			</CopyrightContainer>
		</>
	);
}

export { Footer };
