import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

const AdminPharmacy = () => {
	return (
		<Container>
			<TitleContainer>
					<Title>Farmácias</Title>
					<Subtitle>Tela administrativa das farmácias do sistema!</Subtitle>
				</TitleContainer>
		</Container>
	);
}

export { AdminPharmacy };
