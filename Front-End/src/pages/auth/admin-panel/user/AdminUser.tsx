import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";
import { AdminPanelLayout } from "..";

const AdminUser = () => {
	return (
		<AdminPanelLayout>
			<Container>
				<TitleContainer>
					<Title>Usuários</Title>
					<Subtitle>Tela administrativa dos usuários do sistema!</Subtitle>
				</TitleContainer>
			</Container>
		</AdminPanelLayout>
	);
}

export { AdminUser };
