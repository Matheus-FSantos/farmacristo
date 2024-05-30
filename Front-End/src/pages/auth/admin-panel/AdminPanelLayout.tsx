import { useNavigate } from "react-router-dom";
import { PrivateRoute } from "../private-route";
import { LogoPNG } from "../../../assets/icons/icons";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { Container as ContainerGlobal } from "../../../components/ui/containers/Container";

import {
	Container,
	CopyrightSpan,
	Logo,
	Option,
	OptionsContainer,
	SideBar,
	SideBarContainer,
	SideBarHr
} from "./styles";

interface IAdminPanelProps {
	children?: React.ReactNode | undefined
}

const AdminPanelLayout = ({ children }: IAdminPanelProps): React.ReactElement => {
	useDinamicTitle("Painel de Admin.");
	const navigate = useNavigate();

	const handleNavigate = (path: string): void => {
		navigate(path);
	};

	return (
		<>
			<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
					crossOrigin="anonymous"
				/>
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
								<Option onClick={() => handleNavigate("/admin-panel/users")}>
									<i className="fa-solid fa-user" style={{ color: "#000c6e" }}></i>
									<a>
										Usuários
									</a>
								</Option>
								<Option onClick={() => handleNavigate("/admin-panel/products")}>
									<i
										className="fa-solid fa-box-archive"
										style={{ color: "#000c6e" }}
									></i>
									<a>
										Produtos
									</a>
								</Option>
								<Option onClick={() => handleNavigate("/admin-panel/pharmacies")}>
									<i
										className="fa-solid fa-building"
										style={{ color: "#000c6e" }}
									></i>
									<a>
										Farmácias
									</a>
								</Option>
								<Option onClick={() => handleNavigate("/admin-panel/cvs")}>
									<i
										className="fa-solid fa-paper-plane"
										style={{ color: "#000c6e" }}
									></i>
									<a>
										Currículos
									</a>
								</Option>
							</OptionsContainer>
							<CopyrightSpan>Todos os direitos reservados ©</CopyrightSpan>
						</SideBar>
						<SideBarHr />
					</SideBarContainer>
					<ContainerGlobal Type="iframe">
						{ children }
					</ContainerGlobal>
				</Container>
			</PrivateRoute>
		</>
	);
};

export { AdminPanelLayout };
