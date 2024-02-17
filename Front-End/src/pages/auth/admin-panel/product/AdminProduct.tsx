import { useEffect, useState } from "react";
import { AdminPanelLayout } from "..";
import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { ProductTable } from "../../../../components/table/product/ProductTable";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

import { NewProduct } from "./new-product";
import { UpdateProduct } from "./update-product";
import { Modal } from "../../../../components/modal/Modal";

import { NewModalBtn } from "./styles";
import { AuthService } from "../../../../services/Auth.service";
import { useNavigate } from "react-router-dom";
import { ProductService } from "../../../../services/Products.service";

const AdminProduct = (): React.ReactElement => {

	const navigate = useNavigate();
	const authService = new AuthService();
	const productService = new ProductService();

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
	const [credentials, setCredentials] = useState<IUserReducedDTO>({ id: "", email: "", password: "" });

	const [filter, setFilter] = useState<string>("");

	const [productToEdit, setProductToEdit] = useState<IProductFullDTO>({
		image: "",
		infos: {
			id: "",
			name: "",
			brand: "",
			description: "",
			price: "",
			promotionalPrice: "",
			prescriptionIsRequired: false,
			pharmacies: [
				{
					id: "",
					name: "",
					email: "",
					number: "",
					postalCode: "",
					address: {
						uf: "",
						locality: "",
						neighborhood: "",
						publicPlace: "",
					}
				}
			]
		}
	});
	
	const handleModalVisibility = () => {
		setIsOpenModal(!isOpenModal);
	}

	const handleEditModalVisibility = (product?: IProductFullDTO) => {
		if(isOpenEditModal === false)
			if(product != undefined)
				setProductToEdit(product);

		setIsOpenEditModal(!isOpenEditModal);
	}

	const handleDeleteProduct = (id?: string) => {
		if(id != undefined)
			productService.delete(credentials.email, credentials.password, id).then(() => {
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
							<input type="text" className="form-control" placeholder="Ex.: Nivea Men Care" aria-label="search" aria-describedby="addon-wrapping" value={ filter } onChange={ (e) => setFilter(e.target.value) } />
						</div>
					</Container>
					<ProductTable
						Filter={ filter }
						onDeleteProduct={ handleDeleteProduct }
						onEditModalVisibility={ handleEditModalVisibility }
					/>	
				</Container>
			</Container>

			<Modal isOpen={ isOpenModal } onRequestClose={ handleModalVisibility }>
				<NewProduct Credentials={ credentials } onRequestClose={ handleModalVisibility } />
			</Modal>
			
			<Modal isOpen={ isOpenEditModal } onRequestClose={ handleEditModalVisibility }>
				<UpdateProduct Credentials={ credentials } OldProduct={ productToEdit } onRequestClose={ handleModalVisibility } />
			</Modal>
		</AdminPanelLayout>
	);
}

export { AdminProduct };
