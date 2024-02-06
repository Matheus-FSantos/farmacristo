import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";
import { AdminPanelLayout } from "..";

const AdminHome = () => {
	return (
		<AdminPanelLayout>
			<Container>
				<TitleContainer>
					<Title>Painel Adm.</Title>
					<Subtitle>Bem vindo ao painel administrativo da FarmaCristo!</Subtitle>
				</TitleContainer>
			</Container>
		</AdminPanelLayout>
	);
}

export { AdminHome };
