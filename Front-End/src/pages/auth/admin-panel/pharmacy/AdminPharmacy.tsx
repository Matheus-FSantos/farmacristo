import { useEffect, useState } from "react";
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
import { AuthService } from "../../../../services/Auth.service";
import { useNavigate } from "react-router-dom";
import { PharmacyService } from "../../../../services/Pharmacies.service";

const AdminPharmacy = () => {
	
	const navigate = useNavigate();
	const authService = new AuthService();
	const pharmacyService = new PharmacyService();

	const [filter, setFilter] = useState<string>("");
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [credentials, setCredentials] = useState<IUserReducedDTO>({ id: "", email: "", password: "" });
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

	const [pharmacyToEdit, setPharmacyToEdit] = useState<IPharmacyFullDTO>({
		image: "",
		infos: {
			id: "",
			name: "",
			email: "",
			number: "",
			postalCode: "",
			address: {
				locality: "",
				neighborhood: "",
				publicPlace: "",
				uf: ""
			}
		}
	});

	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleEditModalVisibility = (pharmacy?: IPharmacyFullDTO) => {
		if(isOpenEditModal === false)
			if(pharmacy != undefined)
				setPharmacyToEdit(pharmacy);

		setIsOpenEditModal(!isOpenEditModal);
	}

	const handleDeletePharmacy = (id?: string) => {
		if(id != undefined)
			pharmacyService.delete(credentials.email, credentials.password, id).then(() => {
				window.location.reload();
			}).catch(() => { handleLogout() });
	}

	const handleLogout = (): void => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			setCredentials(credentials);
		} catch (error) { handleLogout(); }
	}, []);
	
	return (
		<AdminPanelLayout>
			<Container Type="flex column start gap-10 w-100 main-content">
				<TitleContainer>
					<Title>Farmácias</Title>
					<Subtitle>Tela administrativa das farmácias do sistema!</Subtitle>
				</TitleContainer>
				<Container Type="flex column end no-padding gap-20 w-100">
					<Container Type="flex no-padding justify-center row-reverse center gap-20 w-100 search-container">
						<NewModalBtn className="btn btn-primary" onClick={ handleModalVisibility }><span>Nova farmácia</span></NewModalBtn>
						<div className="input-group flex-nowrap">
							<span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass" style={{ color: "#77767b" }}></i></span>
							<input type="text" className="form-control" placeholder="Ex.: Cristo Fórmulas" aria-label="search" aria-describedby="addon-wrapping" value={ filter } onChange={ (e) => setFilter(e.target.value) }/>
						</div>
					</Container>
					<PharmacyTable
						Filter={ filter }
						onDeleteProduct={ handleDeletePharmacy }
						onEditModalVisibility={ handleEditModalVisibility }
					/>
				</Container>
			</Container>

			<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
				<NewPharmacy onRequestClose={ handleEditModalVisibility } Credentials={ credentials } />
			</Modal>
			
			<Modal isOpen={ isOpenEditModal } onRequestClose={ handleEditModalVisibility }>
				<UpdatePharmacy Infos={ pharmacyToEdit } onRequestClose={ handleEditModalVisibility } Credentials={ credentials } />
			</Modal>
		</AdminPanelLayout>
	);
}

export { AdminPharmacy };
