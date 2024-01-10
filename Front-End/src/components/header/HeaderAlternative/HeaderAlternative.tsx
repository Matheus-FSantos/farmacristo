import { useNavigate } from "react-router-dom";
import { FacebookSVG, InstagramSVG, LogoPNG, PersonSVG, SearchSVG, ShoppingCart, TwitterSVG } from "../../../assets/icons/icons";
import { Container, Hr, Icon, Logo, Main, Option, OptionsContainer, ShoppingCartIconContainer, SocialMediaFlex } from "../styles";

const HeaderAlternative = () => {

	const navigate = useNavigate();

	return (
		<Container>
			<SocialMediaFlex>
				<a href="https://www.facebook.com/" target="_blank">
					<Icon src={ FacebookSVG } alt="Logo do aplicativo facebook (um F com o fundo em azul)" />
				</a>
				<a href="https://www.instagram.com/" target="_blank">
					<Icon src={ InstagramSVG } alt="Logo do aplicativo instagram (uma camera, arredondada, com o fundo em azul)" />
				</a>
				<a href="https://twitter.com/" target="_blank">
					<Icon src={ TwitterSVG } className="twitter" alt="Logo do aplicativo Twiiter (um passarinho em branco com o fundo em azul escuro)" />
				</a>
			</SocialMediaFlex>
			
			<Hr />
			
			<Main>				
				<Logo src={ LogoPNG } className="logo-alternative-header" alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro" onClick={ () => navigate("/") }/>
			
				<OptionsContainer>
					<Option onClick={ () => navigate("/search") }>
						<img src={ SearchSVG } className="xl" alt="Uma ampulheta em azul" />
					</Option>

					<Option onClick={ () => navigate("/shopping-cart") }>
						<ShoppingCartIconContainer>
							<img src={ ShoppingCart } alt="Uma carrinho de supermercado em azul"/>
							<span>0</span>
						</ShoppingCartIconContainer>
					</Option>

					<Option onClick={ () => navigate("/profile") }>
						<img src={ PersonSVG } alt="Uma carrinho de supermercado em azul" />
					</Option>
				</OptionsContainer>
			</Main>
		</Container>
	);
}

export { HeaderAlternative };
