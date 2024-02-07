import { Container } from "../../ui/containers/Container";
import { TableHeader, Image, TableData } from "../styles";
import { FarmaCristoPNG } from "../../../assets/images/images";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";

interface IPharmacyTable {
	onEditModalVisibility: () => void
	onDeleteProduct: (id?: string) => void
}

const PharmacyTable = ({ onEditModalVisibility, onDeleteProduct }: IPharmacyTable): React.ReactElement => {
	const productId = "889d4d12-08ac-4a68-8b30-d1633951d965";
	
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
						<TableHeader scope="col">Data de criação</TableHeader>
						<TableHeader scope="col">Data de atualização</TableHeader>
						<TableHeader scope="col">Editar</TableHeader>
						<TableHeader scope="col">Remover</TableHeader>
					</tr>
				</thead>
				<tbody>
					<tr>
						<TableData className="id">
							{ productId }
						</TableData>
						<TableData>
							<Image src={ FarmaCristoPNG } />
						</TableData>
						<TableData>Cristo Formúlas</TableData>
						<TableData>cristoformulas@redefarmacristo.com.br</TableData>
						<TableData>11 9 6581-9026</TableData>
						<TableData>05875-350</TableData>
						<TableData>05/02/2024 às 11:55:55</TableData>
						<TableData>05/02/2024 às 11:55:55</TableData>
						<TableData>
							<button onClick={ onEditModalVisibility } type="button" className="btn btn-outline-success">
								Editar
							</button>
						</TableData>
						<TableData>
							<DeleteButton
								Title="Confirma essa ação?"
								Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, será possivel contornar a situação criando outro produto."
								ItemID={ productId }
								onDelete={ onDeleteProduct }
							/>
						</TableData>
					</tr>

				</tbody>
			</table>
		</Container>
	);
};

export { PharmacyTable };
