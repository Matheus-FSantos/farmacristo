import { useState } from "react";
import { NewUser } from "./new-user";
import { AdminPanelLayout } from "..";
import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { UserTable } from "../../../../components/table/user/UserTable";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";
import { Modal } from "../../../../components/modal/Modal";
import { NewModalBtn } from "../product/styles";

const AdminUser = () => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	
	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleDeleteUser = (id?: string) => {
		console.log(id);
	}

	const handleUpdateTier = (id?: string) => {
		console.log("Update tier, user id :>> " + id);
	}
	
	return (
		<AdminPanelLayout>
			<Container Type="flex column start gap-10 w-100">
				<TitleContainer>
					<Title>Usuários</Title>
					<Subtitle>Tela administrativa dos usuários do sistema!</Subtitle>
				</TitleContainer>
				<Container Type="flex column end no-padding gap-20 w-100">
					<Container Type="flex no-padding justify-center row-reverse center gap-20 w-100">
						<NewModalBtn className="btn btn-primary" onClick={ handleModalVisibility }><span>Novo Usuário</span></NewModalBtn>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass" style={{ color: "#77767b" }}></i></span>
							<input type="text" className="form-control" placeholder="Ex.: Jhonatas Silva" aria-label="search" aria-describedby="addon-wrapping" />
						</div>
					</Container>
					<UserTable
						onDelete={ handleDeleteUser }
						onUpdateTier={ handleUpdateTier }
					/>
				</Container>
			</Container>

			<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
				<NewUser />
			</Modal>
		</AdminPanelLayout>
	);
}

export { AdminUser };
