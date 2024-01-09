import { Container, Subtitle, TextContainer, Title } from "./styles";

const NewProduct = () => {
	return (
		<Container>
			<TextContainer>
				<Title>Criar um produto</Title>
				<Subtitle>Crie um novo produto abaixo, campos obrigatórios são marcados com <span>*</span></Subtitle>
			</TextContainer>
		</Container>
	);
}

export { NewProduct };
