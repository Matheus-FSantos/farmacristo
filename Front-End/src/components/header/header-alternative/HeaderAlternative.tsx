import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowResourcesSVG } from "../../../assets/icons/icons";
import { FacebookSVG, InstagramSVG, LogoPNG, PersonSVG, SearchSVG, ShoppingCart, TwitterSVG } from "../../../assets/icons/icons";
import { Container, Icon, Logo, Main, Option, OptionsContainer, ShoppingCartIconContainer, SocialMediaFlex } from "../styles";
import { NavContainer, ResourcesDropDown } from "./styles";
import { Hr } from "../../ui/hr/Hr";

interface IHeaderAlternative {
	isLogged: boolean
}

const HeaderAlternative = ({ isLogged }: IHeaderAlternative) => {

	const navigate = useNavigate();
	const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);

	const handleNavigate = (path: string) => {
		navigate(path);
	}

	const handlePrivateRoutesOnHeader = (path: string) => {
		if(isLogged)
			handleNavigate(path);
		else
			handleNavigate("/sign-in");
	}

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
				<Logo src={ LogoPNG } className="logo-alternative-header" alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro" onClick={ () => handleNavigate("/") }/>
			
				<NavContainer>
					<ul>
						<li className="brightness"><span className="disableBrightness" onClick={() => handleNavigate("/")}>Inicio</span></li>
						<li className="brightness"><span className="disableBrightness" onClick={() => handleNavigate("/search")}>Pesquisa</span></li>
						<li className="brightness" id="resources" onClick={() => setDropdownIsActive(!dropdownIsActive) }>
							<span>
								Recursos
								<img src={ ArrowResourcesSVG } alt="Seta azul apontando para baixo, que quando clicada aponta para cima" className={ dropdownIsActive ? "actived" : ""} />
							</span>
							<ResourcesDropDown className={ dropdownIsActive ? "actived" : ""}>
								<p onClick={() => handleNavigate("/careers")}>Trabalhe conosco</p>
								<p onClick={() => handleNavigate("/explore")}>Explore sobre nós</p>
								<p onClick={() => handleNavigate("/admin-painel")}>Painel Administrativo</p>
							</ResourcesDropDown>
						</li>
					</ul>
				</NavContainer>

				<OptionsContainer>
					<Option onClick={ () => handleNavigate("/search") }>
						<img src={ SearchSVG } className="xl" alt="Uma ampulheta em azul" />
					</Option>

					<Option onClick={ () => handleNavigate("/shopping-cart") }>
						<ShoppingCartIconContainer>
							<img src={ ShoppingCart } alt="Uma carrinho de supermercado em azul"/>
							<span>0</span>
						</ShoppingCartIconContainer>
					</Option>

					<Option onClick={ () => handlePrivateRoutesOnHeader("/profile") }>
						<img src={ PersonSVG } alt="Uma carrinho de supermercado em azul" />
					</Option>
				</OptionsContainer>
			</Main>
		</Container>
	);
}

export { HeaderAlternative };
