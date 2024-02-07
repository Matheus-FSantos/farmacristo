import { useState } from "react";
import { AdminPanelLayout } from "..";
import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

import { NewModalBtn } from "../product/styles";
import { Modal } from "../../../../components/modal/Modal";
import { NewPharmacy } from "./new-pharmacy/NewPharmacy";
import { PharmacyTable } from "../../../../components/table/pharmacy/PharmacyTable";
import { UpdatePharmacy } from "./update-pharmacy/UpdatePharmacy";

const AdminPharmacy = () => {
	
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleEditModalVisibility = () => {
		setIsOpenEditModal(!isOpenEditModal);
	}

	const handleDeletePharmacy = (id?: string) => {
		console.log(id);
	}
	
	return (
		<AdminPanelLayout>
			<Container Type="flex column start gap-10 w-100">
				<TitleContainer>
					<Title>Farmácias</Title>
					<Subtitle>Tela administrativa das farmácias do sistema!</Subtitle>
				</TitleContainer>
				<Container Type="flex column end no-padding gap-20 w-100">
					<Container Type="flex no-padding justify-center row-reverse center gap-20 w-100">
						<NewModalBtn className="btn btn-primary" onClick={ handleModalVisibility }><span>Nova farmácia</span></NewModalBtn>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass" style={{ color: "#77767b" }}></i></span>
							<input type="text" className="form-control" placeholder="Ex.: Cristo Fórmulas" aria-label="search" aria-describedby="addon-wrapping" />
						</div>
					</Container>
					<PharmacyTable
						onDeleteProduct={ handleDeletePharmacy }
						onEditModalVisibility={ handleEditModalVisibility }
					/>
				</Container>
			</Container>

			<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
				<NewPharmacy />
			</Modal>
			
			<Modal isOpen={ isOpenEditModal } onRequestClose={ handleEditModalVisibility }>
				<UpdatePharmacy />
			</Modal>
		</AdminPanelLayout>
	);
}

export { AdminPharmacy };
