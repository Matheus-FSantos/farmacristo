import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../ui/containers/Container";
import { AuthService } from "../../../services/Auth.service";
import { PharmacyService } from "../../../services/Pharmacies.service";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";

import { TableHeader, Image, TableData } from "../styles";

interface IPharmacyTable {
	Filter: string
	onEditModalVisibility: (pharmacy: IPharmacyFullDTO) => void
	onDeleteProduct: (id?: string) => void
}

const PharmacyTable = ({ Filter, onEditModalVisibility, onDeleteProduct }: IPharmacyTable): React.ReactElement => {

	const navigate = useNavigate();
	const authService = new AuthService();
	const pharmacyService = new PharmacyService();

	const [pharmacies, setPharmacies] = useState<IPharmacyFullDTO[]>([]);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		pharmacyService.findAll().then((data) => setPharmacies(data)).catch(() => { handleLogout(); } );
	}, []);

	return (
		<Container Type="no-padding w-100">
			<table className="table">
				<thead>
					<tr>
						<TableHeader scope="col">#</TableHeader>
						<TableHeader scope="col">Imagem</TableHeader>
						<TableHeader scope="col">Nome</TableHeader>
						<TableHeader scope="col">E-Mail</TableHeader>
						<TableHeader scope="col">Número</TableHeader>
						<TableHeader scope="col">CEP</TableHeader>
						<TableHeader scope="col">Editar</TableHeader>
						<TableHeader scope="col">Remover</TableHeader>
					</tr>
				</thead>
				<tbody>
					{
						!Filter ?
							pharmacies.map(pharmacy => 
								<tr key={ pharmacy.infos.id }>
									<TableData className="id">
										{ pharmacy.infos.id }
									</TableData>
									<TableData>
										<Image src={ pharmacy.image } />
									</TableData>
									<TableData>{ pharmacy.infos.name }</TableData>
									<TableData>{ pharmacy.infos.email }</TableData>
									<TableData>{ pharmacy.infos.number }</TableData>
									<TableData>{ pharmacy.infos.postalCode }</TableData>
									<TableData>
										<button onClick={ () => onEditModalVisibility(pharmacy) } type="button" className="btn btn-outline-success">
											Editar
										</button>
									</TableData>
									<TableData>
										<DeleteButton
											Title="Confirma essa ação?"
											Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, será possivel contornar a situação criando outro produto."
											ItemID={ pharmacy.infos.id }
											onDelete={ onDeleteProduct }
										/>
									</TableData>
								</tr>
							)
						:
							pharmacies.filter((pharmacy) => pharmacy.infos.name.toLowerCase().includes(Filter.toLowerCase())).length === 0 ?
								<TableData className="id not-found" colSpan={ 8 }>Nenhum resultado...</TableData>
							:
								pharmacies.filter((pharmacy) => pharmacy.infos.name.toLowerCase().includes(Filter.toLowerCase())).map(pharmacy => 
									<tr key={ pharmacy.infos.id }>
										<TableData className="id">
											{ pharmacy.infos.id }
										</TableData>
										<TableData>
											<Image src={ pharmacy.image } />
										</TableData>
										<TableData>{ pharmacy.infos.name }</TableData>
										<TableData>{ pharmacy.infos.email }</TableData>
										<TableData>{ pharmacy.infos.number }</TableData>
										<TableData>{ pharmacy.infos.postalCode }</TableData>
										<TableData>
											<button onClick={ () => onEditModalVisibility(pharmacy) } type="button" className="btn btn-outline-success">
												Editar
											</button>
										</TableData>
										<TableData>
											<DeleteButton
												Title="Confirma essa ação?"
												Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, será possivel contornar a situação criando outro produto."
												ItemID={ pharmacy.infos.id }
												onDelete={ onDeleteProduct }
											/>
										</TableData>
									</tr>
								)
					}
				</tbody>
			</table>
		</Container>
	);
};

export { PharmacyTable };

