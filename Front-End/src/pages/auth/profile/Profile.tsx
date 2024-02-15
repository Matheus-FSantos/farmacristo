import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoute } from "../private-route";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { AuthService } from "../../../services/Auth.service";
import { Button } from "../../../components/ui/button/styles";
import { UsersService } from "../../../services/Users.service";
import { GlobalLayout } from "../../../layout/global/GlobalLayout";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../components/ui/containers/Container";
import { DeleteButton } from "../../../components/ui/button/delete-button/DeleteButton";
import { UpdateButton } from "../../../components/ui/button/update-button/UpdateButton";
import { TitleContainer } from "../../../components/ui/containers/title-container/TitleContainer";

import { Modal } from "../../../components/modal/Modal";
import { UpdateUser } from "../admin-panel/user/update-user";

import styled from "styled-components";

const ProfileImage = styled.img`
	width: 80px;
	height: 75px;

	border-radius: 999px;
`;

const ProfileInfo = styled.span`
	font-weight: 500;

	span {
		font-weight: 600;
	}
`;

const Profile = () => {
	const navigate = useNavigate();
	const authService = new AuthService();
	const usersService = new UsersService();

	const [oldInformations, setOldInformations] = useState({ id: "", name: "", email: "", password: ""});

	const [userImage, setUserImage] = useState<string>();
	const [defaultData, setDefaultData] = useState<IUserDTO>();
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			usersService.findById(credentials.email, credentials.password, credentials.id).then((data) => {
				setDefaultData(data);
				setOldInformations(
					{
						id: credentials.id,
						name: data.name,
						email: data.email,
						password: credentials.password
					}
				);
			}).catch((error) => {
				console.error(`Erro ao buscar usuário ${ error }`);
				handleLogout();
			});

			usersService.findUserImageById(credentials.email, credentials.password, credentials.id).then((data) => setUserImage(data));
		} catch (error) {
			handleLogout();
		}
	}, []);

	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	const handleDelete = (id: string) => {
		const credentials = authService.getCredentials();
		usersService.delete(credentials.email, credentials.password, id).then(() => { handleLogout(); }).catch(() => { handleLogout() });
	}

	return (
		<PrivateRoute>
			<GlobalLayout>
				<Container Type="no-padding h-700px flex column start justify-between">
					<div>
						<TitleContainer>
							<Title Type="sm">Perfil</Title>
							<Subtitle>Olá { defaultData?.name }, bem vindo ao seu perfil!</Subtitle>
						</TitleContainer>

						<Container Type="padding-top flex center gap-20">
							<ProfileImage src={ userImage } />
							<TitleContainer>
								<ProfileInfo><span>Nível:</span>&nbsp;{ defaultData?.tier === "Administrator" ? "Admin" : "Comum" }</ProfileInfo>
								<ProfileInfo><span>Nome:</span>&nbsp;{ defaultData?.name }</ProfileInfo>
								<ProfileInfo><span>E-Mail:</span>&nbsp;{ defaultData?.email }</ProfileInfo>
							</TitleContainer>
						</Container>

						<Container Type="no-padding flex center gap-20">
							<DeleteButton
								Type="radix"
								Label="Deletar conta"
								Title="Confirma essa ação?"
								Description="Ao clicar para deletar, a sua conta será permantemente removida do sistema, logo, caso tente entrar novamente nessa, será impossibilitado e terá que criar novamente outra conta."
								onDelete={ handleDelete }
								ItemID={ defaultData?.id + "" }
							/>
							<UpdateButton
								Label="Atualizar conta"
								ChangeVisibility={ handleModalVisibility }
							/>
						</Container>
					</div>
					
					<Button onClick={ handleLogout } className="cancel">Logout</Button>
				</Container>
			</GlobalLayout>
			<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
				<UpdateUser
					onRequestClose={ handleModalVisibility }
					Credentials={ oldInformations }
				/>
			</Modal>
		</PrivateRoute>
	);
}

export { Profile };
