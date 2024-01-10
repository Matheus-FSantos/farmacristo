import { useNavigate } from "react-router-dom";
import { FacebookSVG, InstagramSVG, LogoPNG, PersonSVG, SearchSVG, ShoppingCart, TwitterSVG } from "../../../assets/icons/icons";
import { Container, Hr, Icon, Logo, Main, Option, OptionsContainer, ShoppingCartIconContainer, SocialMediaFlex } from "../styles";

import styled from "styled-components";
import { useState } from "react";

const NavContainer = styled.nav`
	position: relative;
	left: 4%;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 1.875rem; /* 30px */

		li {
			font-size: 1rem;
			font-weight: 700;
			color: var(--blue-1000);

			section.actived {
				display: block;
			}
		}
	}
`;

const ResourcesDropDown = styled.section`
	min-width: 220px;
	
	display: none;

  position: absolute;
	top: 120%;
  z-index: 99;
	
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 10px;

	overflow: hidden;

	p {
		padding: 10px;
		color: var(--black-900);

		&:hover {
			color: var(--blue-1000);
			background-color: var(--blue-200);
		}
	}
`;

const HeaderAlternative = () => {

	const navigate = useNavigate();
	const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);

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
			
				<NavContainer>
					<ul>
						<li className="brightness"><a className="disableBrightness" href="/">Inicio</a></li>
						<li className="brightness"><a className="disableBrightness" href="/search">Pesquisa</a></li>
						<li className="brightness" id="resources" onClick={() => setDropdownIsActive(!dropdownIsActive) }>
							Recursos
							<ResourcesDropDown className={ dropdownIsActive ? "actived" : ""}>
								<p>Trabalhe conosco</p>
								<p>Painel Administrativo</p>
							</ResourcesDropDown>
						</li>
					</ul>
				</NavContainer>

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
