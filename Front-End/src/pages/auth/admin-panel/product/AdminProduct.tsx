import { Title } from "../../../../components/ui/title/Title";
import { Subtitle } from "../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../components/ui/containers/Container";
import { PharmacyTable } from "../../../../components/table/pharmacy/PharmacyTable";
import { TitleContainer } from "../../../../components/ui/containers/title-container/TitleContainer";

const AdminProduct = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>Produtos</Title>
				<Subtitle>Tela administrativa dos produtos do sistema!</Subtitle>
			</TitleContainer>
			<PharmacyTable />	
		</Container>
	);
}

export { AdminProduct };
