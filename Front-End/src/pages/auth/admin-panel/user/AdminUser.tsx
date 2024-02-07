import { AdminPanelLayout } from "..";
import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { UserTable } from "../../../../components/table/user/UserTable";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

const AdminUser = () => {
	return (
		<AdminPanelLayout>
			<Container>
				<TitleContainer>
					<Title>Usuários</Title>
					<Subtitle>Tela administrativa dos usuários do sistema!</Subtitle>
				</TitleContainer>
				<UserTable />
			</Container>
		</AdminPanelLayout>
	);
}

export { AdminUser };
