import { useNavigate } from "react-router-dom";
import {
	LogoPNG,
	EmailSVG,
	TwitterSVG,
	WhatsappSVG,
	FacebookSVG,
	InstagramSVG,
	SearchSVG,
	ShoppingCart,
} from "../../assets/icons/icons";
import {
	Hr,
	Icon,
	Main,
	Logo,
	Option,
	Container,
	Informations,
	SocialMediaFlex,
	OptionsContainer,
	ContactInformations,
	ShoppingCartIconContainer,
} from "./styles";

const Header = (): React.ReactElement => {

	const navigate = useNavigate();

	return (
		<Container>
			<SocialMediaFlex>
				<a href="https://www.facebook.com/" target="_blank">
					<Icon src={ FacebookSVG } alt="Facebook logo" />
				</a>
				<a href="https://www.instagram.com/" target="_blank">
					<Icon src={ InstagramSVG } alt="Instagram logo" />
				</a>
				<a href="https://twitter.com/" target="_blank">
					<Icon src={ TwitterSVG } className="twitter" alt="Twitter logo" />
				</a>
			</SocialMediaFlex>
			
			<Hr />
			
			<Main>
				<ContactInformations>
					<Informations>
						<Icon src={ EmailSVG } alt="Email Logo" />
						<span>farmacristo@redefarmacristo.com.br</span>
					</Informations>
					<Informations>
						<Icon src={ WhatsappSVG } alt="Whatsapp Logo" />
						<span>+55 15 99618-1099</span>
					</Informations>
				</ContactInformations>			
				
				<Logo src={ LogoPNG } alt="FarmaCristo logo" onClick={ () => navigate("/") }/>
			
				<OptionsContainer>
					<Option onClick={ () => navigate("/search") }>
						<img src={ SearchSVG } alt="search icon" />
						<span>Encontre seu produto</span>
					</Option>

					<Option onClick={ () => navigate("/shopping-cart") }>
						<ShoppingCartIconContainer>
							<img src={ ShoppingCart } alt="search icon" />
							<span>0</span>
						</ShoppingCartIconContainer>
						<span>Seu carrinho</span>
					</Option>
				</OptionsContainer>
			</Main>
		</Container>
	);
};

export { Header };
