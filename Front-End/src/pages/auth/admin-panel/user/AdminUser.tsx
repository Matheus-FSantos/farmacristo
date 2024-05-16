import { useEffect, useState } from "react";

import { NewUser } from "./new-user";
import { AdminPanelLayout } from "..";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../../components/toast";
import { useTimeout } from "../../../../hooks/useTimeout";
import { Modal } from "../../../../components/modal/Modal";
import { AuthService } from "../../../../services/Auth.service";
import { UsersService } from "../../../../services/Users.service";

/* UI */
import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { UserTable } from "../../../../components/table/user/UserTable";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

import { NewModalBtn } from "../product/styles";

const AdminUser = () => {

	const navigate = useNavigate();
	const authService = new AuthService();
	const usersService = new UsersService();

	const [inputFilter, setInputFilter] = useState<string>("");
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [credentials, setCredentials] = useState<IUserReducedDTO>({ id: "", email: "", password: ""});

	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleDeleteUser = (id: string) => {
		usersService.delete(credentials.email, credentials.password, id).then(() => {
			window.location.reload();
		}).catch(() => { handleLogout() })
	}

	const handleUpdateTier = async (id: string, tier: string) => {
		const alert = toast.loading("Por favor, aguarde...");
		await useTimeout(1000);

		if(tier === "Client") {
			usersService.updateTierToAdmin(credentials.email, credentials.password, id).then(async (message) => {
				toast.update(alert, {
					render: message + "",
					type: "success",
					isLoading: false,
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				await useTimeout(1000);
				window.location.reload();
			}).catch(async () => {
				toast.update(alert, {
					render: "Erro ao atualizar tier",
					type: "error",
					isLoading: false,
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				await useTimeout(1000);
				window.location.reload();
			});
		} else {
			usersService.downgradeTierToClient(credentials.email, credentials.password, id).then(async (message) => {
				toast.update(alert, {
					render: message + "",
					type: "success",
					isLoading: false,
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				await useTimeout(1000);
				window.location.reload();
			}).catch(async () => {
				toast.update(alert, {
					render: "Erro ao atualizar tier",
					type: "error",
					isLoading: false,
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				await useTimeout(1000);
				window.location.reload();
			});
		}
	}

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			setCredentials(credentials);
		} catch (error) { handleLogout(); }
	}, [])

	return (
		<>
			<AdminPanelLayout>
				<Container Type="flex column start gap-10 w-100 main-content">
					<TitleContainer>
						<Title>Usuários</Title>
						<Subtitle>Tela administrativa dos usuários do sistema!</Subtitle>
					</TitleContainer>
					<Container Type="flex column end no-padding gap-20 w-100">
						<Container Type="flex no-padding justify-center row-reverse center gap-20 w-100 search-container">
							<NewModalBtn className="btn btn-primary" onClick={ handleModalVisibility }><span>Novo Usuário</span></NewModalBtn>
							<div className="input-group flex-nowrap">
								<span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass" style={{ color: "#77767b" }}></i></span>
								<input type="text" className="form-control" placeholder="Ex.: Jhonatas Silva" aria-label="search" aria-describedby="addon-wrapping" value={ inputFilter } onChange={ (e) => setInputFilter(e.target.value) }/>
							</div>
						</Container>
						<UserTable
							Filter={ inputFilter }
							onDelete={ handleDeleteUser }
							onUpdateTier={ handleUpdateTier }
						/>
					</Container>
				</Container>

				<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
					<NewUser onRequestClose={ handleModalVisibility } Credentials={ credentials }/>
				</Modal>
			</AdminPanelLayout>
			<Toast />
		</>
	);
}

export { AdminUser };
