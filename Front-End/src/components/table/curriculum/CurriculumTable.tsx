import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableData, TableHeader } from "../styles";
import { Container } from "../../ui/containers/Container";
import { AuthService } from "../../../services/Auth.service";

import { ViewCvButton } from "../../ui/button/view-cv-button/ViewCvButton";
import { CurriculumService } from "../../../services/Curriculum.service";
import { Spinner } from "../../ui/spinner";
import { DeleteButton } from "../../ui/button/delete-button/DeleteButton";

interface ICurriculumTableProps {
	Filter?: string
	onDelete: (id: string) => void
}

const CurriculumTable = ({ Filter, onDelete }: ICurriculumTableProps): React.ReactElement => {
	const navigate = useNavigate();
	const authService = new AuthService();
	const curriculumService = new CurriculumService();

	const [curriculums, setCurriculums] = useState<ICurriculumDTO[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			setIsLoading(true);
			const login: ILoginDTO = {
				email: credentials.email,
				password: credentials.password
			};

			curriculumService.findAll(login)
				.then((resumes) => {
					setCurriculums(resumes);
					setIsLoading(false);
			}).catch(() => {
				handleLogout();
				setIsLoading(false);
			});
		} catch (error) { }
	}, []);

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	return (
		<Container Type="no-padding w-100 table">
			<table className="table">
				<thead>
					<tr>
						<TableHeader scope="col">Nome</TableHeader>
						<TableHeader scope="col">E-Mail</TableHeader>
						<TableHeader scope="col">Descrição</TableHeader>
						<TableHeader scope="col">Visualizar</TableHeader>
						<TableHeader scope="col">Ação</TableHeader>
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
								curriculums.length > 0 ?
									curriculums.map((curriculum) => 
										<tr key={ curriculum.id } >
											<TableData>{ curriculum.name }</TableData>
											<TableData>{ curriculum.email }</TableData>
											<TableData>{ curriculum.description === undefined ? "-" : curriculum.description }</TableData>
											<TableData>
												<ViewCvButton
													CurriculumId={ curriculum.id }
												/>
											</TableData>
											<TableData>
												<DeleteButton
													Title="Confirma essa ação?"
													Description="Ao clicar para deletar, o curriculo será permantemente removido do sistema, logo, caso tente procurar novamente por esse curriculo, não o encontrará."
													ItemID={ curriculum.id }
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
								curriculums.filter(curriculum => curriculum.name.toLowerCase().includes(Filter.toLowerCase() + "")).length === 0 ?
									<tr>
										<TableData className="id not-found" colSpan={ 6 }>Nenhum resultado...</TableData>
									</tr>
								:
									curriculums.filter(curriculum => curriculum.name.toLowerCase().includes(Filter.toLowerCase() + "")).map((curriculum) => 
										<tr key={ curriculum.id } >
											<TableData>{ curriculum.name }</TableData>
											<TableData>{ curriculum.email }</TableData>
											<TableData>{ curriculum.description === undefined ? "-" : curriculum.description }</TableData>
											<TableData>
												<ViewCvButton
													CurriculumId={ curriculum.id }
												/>
											</TableData>
											<TableData>
												<DeleteButton
													Title="Confirma essa ação?"
													Description="Ao clicar para deletar, o curriculo será permantemente removido do sistema, logo, caso tente procurar novamente por esse curriculo, não o encontrará."
													ItemID={ curriculum.id }
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

export { CurriculumTable };
