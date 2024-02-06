import { useState } from "react";
import { AdminPanelLayout } from "..";
import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { PharmacyTable } from "../../../../components/table/pharmacy/PharmacyTable";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

import { NewProduct } from "./new-product";
import { UpdateProduct } from "./update-product";
import { Modal } from "../../../../components/modal/Modal";

import { NewModalBtn } from "./styles";

const AdminProduct = (): React.ReactElement => {

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleEditModalVisibility = () => {
		setIsOpenEditModal(!isOpenEditModal);
	}

	const handleDeleteProduct = (id?: string) => {
		console.log(id);
	}

	return (
		<AdminPanelLayout>
			<Container Type="flex column start gap-10 w-100">
				<TitleContainer>
					<Title>Produtos</Title>
					<Subtitle>Tela administrativa dos produtos do sistema!</Subtitle>
				</TitleContainer>
				<Container Type="flex column end no-padding gap-20 w-100">
					<Container Type="flex no-padding justify-center row-reverse center gap-20 w-100">
						<NewModalBtn className="btn btn-primary" onClick={ handleModalVisibility }><span>Novo produto</span></NewModalBtn>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass" style={{ color: "#77767b" }}></i></span>
							<input type="text" className="form-control" placeholder="Ex.: Nivea Men Care" aria-label="search" aria-describedby="addon-wrapping" />
						</div>
					</Container>
					<PharmacyTable onEditModalVisibility={ handleEditModalVisibility } onDeleteProduct={ handleDeleteProduct } />	
				</Container>
			</Container>

			<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
				<NewProduct />
			</Modal>
			
			<Modal isOpen={ isOpenEditModal } onRequestClose={ handleEditModalVisibility }>
				<UpdateProduct />
			</Modal>
		</AdminPanelLayout>
	);
}

export { AdminProduct };
