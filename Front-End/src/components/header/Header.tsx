import { useNavigate } from "react-router-dom";

import {
	LogoPNG,
	EmailSVG,
	WhatsappSVG,
	FacebookSVG,
	InstagramSVG,
	SearchSVG,
	ShoppingCart,
} from "../../assets/icons/icons";

import {
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

/* UI */
import { Hr } from "../ui/hr/Hr";

const Header = (): React.ReactElement => {

	const navigate = useNavigate();

	return (
		<Container>
			<SocialMediaFlex>
				<a href="https://www.facebook.com/redefarmacristo" target="_blank">
					<Icon src={ FacebookSVG } alt="Logo do aplicativo facebook (um F com o fundo em azul)" />
				</a>
				<a href="https://www.instagram.com/redefarmacristo" target="_blank">
					<Icon src={ InstagramSVG } alt="Logo do aplicativo instagram (uma camera, arredondada, com o fundo em azul)" />
				</a>
			</SocialMediaFlex>
			
			<Hr />
			
			<Main>
				<ContactInformations>
					<Informations>
						<Icon src={ EmailSVG } alt="Logo que representa um e-mail (uma carta com fundo azul)" />
						<span>farmacristo@redefarmacristo.com.br</span>
					</Informations>
					<Informations>
						<Icon src={ WhatsappSVG } alt="Logo do aplicativo whatsapp (com fundo em azul)" />
						<span>+55 15 99618-1099</span>
					</Informations>
				</ContactInformations>			
				
				<Logo src={ LogoPNG } alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro" onClick={ () => navigate("/") }/>
			
				<OptionsContainer>
					<Option onClick={ () => navigate("/search") }>
						<img src={ SearchSVG } alt="Uma lupa, na cor azul" />
						<span className="description">Encontre seu produto</span>
					</Option>

					<Option onClick={ () => navigate("/shopping-cart") }>
						<ShoppingCartIconContainer>
							<img src={ ShoppingCart } alt="Um carrinho de compras, na cor azul" />
						</ShoppingCartIconContainer>
						<span className="description">Seu carrinho</span>
					</Option>
				</OptionsContainer>
			</Main>
		</Container>
	);
};

export { Header };
