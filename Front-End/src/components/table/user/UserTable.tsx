import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";
import { UpdateTierButton } from "../../ui/button/update-tier-button/UpdateTierButton";
import { Container } from "../../ui/containers/Container";
import { TableData, TableHeader } from "../styles";

interface IUserTable {
	onDelete: (id?: string) => void
	onUpdateTier: (id?: string) => void
}

const UserTable = ({ onDelete, onUpdateTier }: IUserTable) => {
	const userId = "889d4d12-08ac-4a68-8b30-d1633951d965";

	return (
		<Container Type="no-padding w-100">
			<table className="table">
				<thead>
					<tr>
						<TableHeader scope="col">#</TableHeader>
						<TableHeader scope="col">Nome</TableHeader>
						<TableHeader scope="col">E-Mail</TableHeader>
						<TableHeader scope="col">Nível Hierarquico</TableHeader>
						<TableHeader scope="col">Data de criação</TableHeader>
						<TableHeader scope="col">Data de atualização</TableHeader>
						<TableHeader scope="col">Atualizar Hierarquia</TableHeader>
						<TableHeader scope="col">Remover</TableHeader>
					</tr>
				</thead>
				<tbody>
					<tr>
						<TableData className="id">
							{ userId }
						</TableData>
						<TableData>Jhonatas Silva</TableData>
						<TableData>admin@gmail.com</TableData>
						<TableData>Administrator</TableData>
						<TableData>05/02/2024 às 11:55:55</TableData>
						<TableData>05/02/2024 às 11:55:55</TableData>
						<TableData>
							<UpdateTierButton
								Title="Confirma essa ação?"
								Description="Ao clicar para atualizar, o usuário terá o seu nivel hierarquico alterado para o inverso (se for cliente, passará a ser administrador, se for administrador, passará a ser cliente). Caso clique para atualizar, essa ação pode ser revertida apenas por um administrador."
								ItemID={ userId }
								onUpdateTier={ onUpdateTier }
							/>
						</TableData>
						<TableData>
							<DeleteButton
									Title="Confirma essa ação?"
									Description="Ao clicar para deletar, o usuário será permantemente removido do sistema, logo, caso ele tente entrar novamente em sua conta, será impossibilitado e terá que criar novamente outra conta."
									ItemID={ userId }
									onDelete={ onDelete }
								/>
						</TableData>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}

export { UserTable };
