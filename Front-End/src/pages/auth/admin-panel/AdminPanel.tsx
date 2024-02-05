import { useNavigate } from "react-router-dom";
import { LogoPNG } from "../../../assets/icons/icons";
import {
	Container,
	CopyrightSpan,
	Logo,
	Option,
	OptionsContainer,
	SideBar,
	SideBarContainer,
	SideBarHr,
	IFrame,
} from "./styles";
import { useState } from "react";
import { PrivateRoute } from "../private-route";

const AdminPanel = (): React.ReactElement => {
	const navigate = useNavigate();
	const [iframeLink, setIFrameLink] = useState<string>("/admin-panel/home");

	const handleNavigate = (path: string): void => {
		navigate(path);
	};

	return (
		<PrivateRoute>
			<Container>
				<SideBarContainer>
					<SideBar>
						<Logo
							src={ LogoPNG }
							className="logo-alternative-header"
							alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro"
							onClick={() => handleNavigate("/")}
						/>
						<OptionsContainer>
							<Option onClick={() => setIFrameLink("/admin-panel/home")}>
								<i className="fa-solid fa-home" style={{ color: "#000c6e" }}></i>
								<a>
									Inicio
								</a>
							</Option>
							<Option onClick={() => setIFrameLink("/admin-panel/user")}>
								<i className="fa-solid fa-user" style={{ color: "#000c6e" }}></i>
								<a>
									Usuários
								</a>
							</Option>
							<Option onClick={() => setIFrameLink("/admin-panel/product")}>
								<i
									className="fa-solid fa-box-archive"
									style={{ color: "#000c6e" }}
								></i>
								<a>
									Produtos
								</a>
							</Option>
							<Option onClick={() => setIFrameLink("/admin-panel/pharmacy")}>
								<i
									className="fa-solid fa-building"
									style={{ color: "#000c6e" }}
								></i>
								<a>
									Farmácias
								</a>
							</Option>
						</OptionsContainer>
						<CopyrightSpan>Todos os direitos reservados ©</CopyrightSpan>
					</SideBar>
					<SideBarHr />
				</SideBarContainer>
				<IFrame src={ iframeLink } />
			</Container>
		</PrivateRoute>
	);
};

export { AdminPanel };
