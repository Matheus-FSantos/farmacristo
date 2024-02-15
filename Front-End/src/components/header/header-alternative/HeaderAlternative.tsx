import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowResourcesSVG } from "../../../assets/icons/icons";
import { FacebookSVG, InstagramSVG, LogoPNG, PersonSVG, SearchSVG, ShoppingCart, TwitterSVG } from "../../../assets/icons/icons";
import { Container, Icon, Logo, Main, Option, OptionsContainer, ShoppingCartIconContainer, SocialMediaFlex, MobileSocialMediaContainer } from "../styles";
import { NavContainer, ResponsiveNavContainer, MobileNavBar, ResourcesDropDown } from "./styles";
import { Hr } from "../../ui/hr/Hr";
import { AuthService } from "../../../services/Auth.service";
import { UsersService } from "../../../services/Users.service";

interface IHeaderAlternative {
	isLogged: boolean
}

const HeaderAlternative = ({ isLogged }: IHeaderAlternative) => {
	const navigate = useNavigate();
	const authService = new AuthService();
	const usersService = new UsersService();

	const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);
	const [mobileNavBarOpen, setMobileNavBarOpen] = useState<boolean>(false); 
	const [isAllowedToTheAdminPanel, setIsAllowedToTheAdminPanel] = useState<boolean>(false);

	if(mobileNavBarOpen) {
		var elementoHtml = document.documentElement;
		elementoHtml.style.position = 'fixed';
		elementoHtml.style.width = '100%';
		elementoHtml.style.height = '100%';
	} else {
		var elementoHtml = document.documentElement;
		elementoHtml.style.position = '';
		elementoHtml.style.width = '';
		elementoHtml.style.height = '';
	}

	useEffect(() => {
		try {
			const value = authService.getCredentials();
		
			usersService.findById(value.email, value.password, value.id).then((data) => {
				if(data.tier !== "Client")
					setIsAllowedToTheAdminPanel(true);
				else
					setIsAllowedToTheAdminPanel(false);		
			});	
		} catch (error) {
			setIsAllowedToTheAdminPanel(false);
		}
	}, []);

	const handleNavigate = (path: string) => {
		navigate(path);
	}

	const handlePrivateRoutesOnHeader = (path: string) => {
		if(isLogged)
			handleNavigate(path);
		else
			handleNavigate("/signin");
	}

	return (
		<Container className={ mobileNavBarOpen ? "open" : ""}>
			<MobileSocialMediaContainer>
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
				
				<Logo src={ LogoPNG } className="logo-alternative-header-hr" alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro" onClick={ () => handleNavigate("/") }/>
			</MobileSocialMediaContainer>

			<Hr />
			
			<Main>
				<ResponsiveNavContainer className={ mobileNavBarOpen ? "clicked" : ""} onClick={ () => setMobileNavBarOpen(!mobileNavBarOpen) }>
					<div id="first"></div>
					<div id="second"></div>
					<div id="third"></div>
				</ResponsiveNavContainer>

				<MobileNavBar className={ mobileNavBarOpen ? "actived" : ""}>
					<ul className="column">
						<li className="brightness"><span className="disableBrightness" onClick={() => handleNavigate("/")}>Inicio</span></li>
						<li className="brightness"><span className="disableBrightness" onClick={() => handleNavigate("/search")}>Pesquisa</span></li>
						<li className="brightness" id="resources" onClick={() => setDropdownIsActive(!dropdownIsActive) }>
							<span>
								Recursos
								<img src={ ArrowResourcesSVG } alt="Seta azul apontando para baixo, que quando clicada aponta para cima" className={ dropdownIsActive ? "actived" : ""} />
							</span>
							<ResourcesDropDown id="dropdown" className={ dropdownIsActive ? "actived" : ""}>
								<p onClick={() => handleNavigate("/careers")}>Trabalhe conosco</p>
								<p onClick={() => handleNavigate("/explore")}>Explore sobre nós</p>
								{ isAllowedToTheAdminPanel && <p onClick={() => handleNavigate("/admin-panel")}>Painel Administrativo</p> }
							</ResourcesDropDown>
						</li>
					</ul>
				</MobileNavBar>

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
							<ResourcesDropDown id="dropdown" className={ dropdownIsActive ? "actived" : ""}>
								<p onClick={() => handleNavigate("/careers")}>Trabalhe conosco</p>
								<p onClick={() => handleNavigate("/explore")}>Explore sobre nós</p>
								{ isAllowedToTheAdminPanel && <p onClick={() => handleNavigate("/admin-panel")}>Painel Administrativo</p> }
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
