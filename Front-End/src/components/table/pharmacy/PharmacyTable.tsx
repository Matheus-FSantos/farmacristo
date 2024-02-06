import { Container } from "../../ui/containers/Container";
import { TableHeader, Image, TableData } from "../styles";
import { CreatinaPNG } from "../../../assets/images/images";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";

interface IPharmacyTableProps {
	onEditModalVisibility: () => void
	onDeleteProduct: (id?: string) => void
}

const PharmacyTable = ({ onEditModalVisibility, onDeleteProduct }: IPharmacyTableProps): React.ReactElement => {
	const productId = "889d4d12-08ac-4a68-8b30-d1633951d965";
	
	return (
		<Container Type="no-padding w-100">
			<table className="table">
				<thead>
					<tr>
						<TableHeader scope="col">#</TableHeader>
						<TableHeader scope="col">Imagem</TableHeader>
						<TableHeader scope="col">Nome</TableHeader>
						<TableHeader scope="col">Descrição</TableHeader>
						<TableHeader scope="col">Preço</TableHeader>
						<TableHeader scope="col">Preço Promocional</TableHeader>
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
							<Image src={CreatinaPNG} />
						</TableData>
						<TableData>Rexona Desodorante Aerosol 150ml</TableData>
						<TableData>
							O desodorante Rexona Aerosol oferece uma proteção confiável contra
							o odor e a transpiração ao longo do dia, mantendo você fresco e
							confiante em qualquer situação. Com sua fórmula avançada, este
							desodorante em aerosol proporciona uma sensação de frescor
							revitalizante, enquanto controla efetivamente a umidade, evitando
							o mau odor.
						</TableData>
						<TableData>R$ 120,00</TableData>
						<TableData>-</TableData>
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
								Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, é possivel reverter a ação"
								ProductId={ productId }
								onDeleteProduct={ onDeleteProduct }
							/>
						</TableData>
					</tr>
					<tr>
						<TableData className="id">
							{ productId }
						</TableData>
						<TableData>
							<Image src={CreatinaPNG} />
						</TableData>
						<TableData>Rexona Desodorante Aerosol 150ml</TableData>
						<TableData>
							O desodorante Rexona Aerosol oferece uma proteção confiável contra
							o odor e a transpiração ao longo do dia, mantendo você fresco e
							confiante em qualquer situação. Com sua fórmula avançada, este
							desodorante em aerosol proporciona uma sensação de frescor
							revitalizante, enquanto controla efetivamente a umidade, evitando
							o mau odor.
						</TableData>
						<TableData>R$ 120,00</TableData>
						<TableData>-</TableData>
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
								Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, é possivel reverter a ação"
								ProductId={ productId }
								onDeleteProduct={ onDeleteProduct }
							/>
						</TableData>
					</tr>
					<tr>
						<TableData className="id">
							{ productId }
						</TableData>
						<TableData>
							<Image src={CreatinaPNG} />
						</TableData>
						<TableData>Rexona Desodorante Aerosol 150ml</TableData>
						<TableData>
							O desodorante Rexona Aerosol oferece uma proteção confiável contra
							o odor e a transpiração ao longo do dia, mantendo você fresco e
							confiante em qualquer situação. Com sua fórmula avançada, este
							desodorante em aerosol proporciona uma sensação de frescor
							revitalizante, enquanto controla efetivamente a umidade, evitando
							o mau odor.
						</TableData>
						<TableData>R$ 120,00</TableData>
						<TableData>-</TableData>
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
								Description="Ao clicar para deletar, o produto será permantemente removido do sistema, logo, nenhum usuário/cliente saberá que sua loja vende esse produto. Caso marque para deletar, é possivel reverter a ação"
								ProductId={ productId }
								onDeleteProduct={ onDeleteProduct }
							/>
						</TableData>
					</tr>
				</tbody>
			</table>
		</Container>
	);
};

export { PharmacyTable };
