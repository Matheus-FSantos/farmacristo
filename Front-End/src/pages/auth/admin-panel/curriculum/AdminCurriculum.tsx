import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../../services/Auth.service";
import { CurriculumTable } from "../../../../components/table/curriculum/CurriculumTable";

import { AdminPanelLayout } from "../AdminPanelLayout";


import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";
import { CurriculumService } from "../../../../services/Curriculum.service";

const AdminCurriculum = (): React.ReactElement => {
	
	const navigate = useNavigate();
	const authService = new AuthService();
	const curriculumService = new CurriculumService();

	const [inputFilter, setInputFilter] = useState<string>("");
	const [credentials, setCredentials] = useState<IUserReducedDTO>({ id: "", email: "", password: ""});

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	const handleDeleteCv = (id: string) => {
		curriculumService.delete(credentials.email, credentials.password, id).then(() => {
			window.location.reload();
		}).catch(() => { handleLogout() })
	}

	useEffect(() => {
		try {
			const credentials = authService.getCredentials();
			setCredentials(credentials);
		} catch (error) { handleLogout(); }
	}, [])
	
	return (
		<AdminPanelLayout>
			<Container Type="flex column start gap-10 w-100 main-content">
				<TitleContainer>
					<Title>Currículos</Title>
					<Subtitle>Abaixo, é possivel visualizar quem nós enviou currículo!</Subtitle>
				</TitleContainer>

				<Container Type="flex column end no-padding gap-20 w-100">
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-magnifying-glass" style={{ color: "#77767b" }}></i></span>
						<input type="text" className="form-control" placeholder="Ex.: Mária de Jesus" aria-label="search" aria-describedby="addon-wrapping" value={ inputFilter } onChange={ (e) => setInputFilter(e.target.value) }/>
					</div>

					<CurriculumTable
						Filter={ inputFilter }
						onDelete={ handleDeleteCv }
					/>
				</Container>
			</Container>
		</AdminPanelLayout>
	);
}

export { AdminCurriculum };
