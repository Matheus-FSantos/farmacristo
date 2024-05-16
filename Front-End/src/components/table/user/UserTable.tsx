import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthService } from "../../../services/Auth.service";

/* UI */
import { Spinner } from "../../ui/spinner";
import { Container } from "../../ui/containers/Container";
import { UsersService } from "../../../services/Users.service";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";
import { UpdateTierButton } from "../../ui/button/update-tier-button/UpdateTierButton";

import { TableData, TableHeader } from "../styles";

interface IUserTable {
	Filter?: string
	onDelete: (id: string) => void
	onUpdateTier: (id: string, tier: string) => void
}

const UserTable = ({ onDelete, onUpdateTier, Filter }: IUserTable) => {
	const navigate = useNavigate();
	const authService = new AuthService();
	const usersService = new UsersService();
	const [users, setUsers] = useState<IUserDTO[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			setIsLoading(true);

			usersService.findAll(credentials.email, credentials.password)
				.then((users) => {
					setUsers(users);
					setIsLoading(false);
			}).catch(() => {
				handleLogout();
				setIsLoading(false);
			});
		} catch (error) { }
	}, []);

	return (
		<Container Type="no-padding w-100 table">
			<table className="table">
				<thead>
					<tr>
						<TableHeader scope="col">#</TableHeader>
						<TableHeader scope="col">Nome</TableHeader>
						<TableHeader scope="col">E-Mail</TableHeader>
						<TableHeader scope="col">Nível Hierarquico</TableHeader>
						<TableHeader scope="col">Atualizar Hierarquia</TableHeader>
						<TableHeader scope="col">Remover</TableHeader>
					</tr>
				</thead>
				<tbody>
					{
						isLoading ?
							<tr>
								<TableData className="id not-found" colSpan={ 8 }><Spinner /></TableData>
							</tr>
						:
							!Filter ?
								users.length > 0 ?
									users.map((user) => 
										<tr key={ user.id } >
											<TableData className="id">
												{ user.id }
											</TableData>
											<TableData>{ user.name }</TableData>
											<TableData>{ user.email }</TableData>
											<TableData>{ user.tier === "Administrator" ? "Admin" : "Cliente" }</TableData>
											<TableData>
												<UpdateTierButton
													Title="Confirma essa ação?"
													Description="Ao clicar para atualizar, o usuário terá o seu nivel hierarquico alterado para o inverso (se for cliente, passará a ser administrador, se for administrador, passará a ser cliente). Caso clique para atualizar, essa ação pode ser revertida apenas por um administrador."
													UserTier={ user.tier }
													UserId={ user.id }
													onUpdateTier={ onUpdateTier }
												/>
											</TableData>
											<TableData>
												<DeleteButton
														Title="Confirma essa ação?"
														Description="Ao clicar para deletar, o usuário será permantemente removido do sistema, logo, caso ele tente entrar novamente em sua conta, será impossibilitado e terá que criar novamente outra conta."
														ItemID={ user.id }
														onDelete={ onDelete }
													/>
											</TableData>
										</tr>
									)
								:
									<tr>
										<TableData className="id not-found" colSpan={ 6 }>Nenhum resultado...</TableData>
									</tr>
							:
								users.filter(user => user.name.toLowerCase().includes(Filter.toLowerCase() + "")).length === 0 ?
									<tr>
										<TableData className="id not-found" colSpan={6}>Nenhum resultado...</TableData>
									</tr>
								:
									users.filter(user => user.name.toLowerCase().includes(Filter.toLowerCase() + "")).map((user) => 
										<tr key={ user.id } >
											<TableData className="id">
												{ user.id }
											</TableData>
											<TableData>{ user.name }</TableData>
											<TableData>{ user.email }</TableData>
											<TableData>{ user.tier === "Administrator" ? "Admin" : "Cliente" }</TableData>
											<TableData>
												<UpdateTierButton
													Title="Confirma essa ação?"
													Description="Ao clicar para atualizar, o usuário terá o seu nivel hierarquico alterado para o inverso (se for cliente, passará a ser administrador, se for administrador, passará a ser cliente). Caso clique para atualizar, essa ação pode ser revertida apenas por um administrador."
													UserTier={ user.tier }
													UserId={ user.id }
													onUpdateTier={ onUpdateTier }
												/>
											</TableData>
											<TableData>
												<DeleteButton
														Title="Confirma essa ação?"
														Description="Ao clicar para deletar, o usuário será permantemente removido do sistema, logo, caso ele tente entrar novamente em sua conta, será impossibilitado e terá que criar novamente outra conta."
														ItemID={ user.id }
														onDelete={ onDelete }
													/>
											</TableData>
										</tr>
								)
					}
				</tbody>
			</table>
		</Container>
	);
}

export { UserTable };
