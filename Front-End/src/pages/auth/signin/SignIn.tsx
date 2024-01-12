import styled from "styled-components";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../../layout/global/GlobalLayout";

const Container = styled.section`
	width: 500px;
	height: 600px;
	margin: 0 auto;

	padding: 30px;
	
	border: 1px solid var(--gray-800);
	border-radius: 10px;
`;

const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const Title = styled.h1`
	font-size: 36px;
	font-weight: 700;

	color: var(--black-900);
`;

const Subtitle = styled.h2`
	font-size: 16px;

	color: var(--black-900);
`

const SignIn = (): React.ReactElement => {
	
	useDinamicTitle("Entre em sua conta");
	
	return (
		<GlobalLayout>
			<Container>
				<TitleContainer>
					<Title>Entrar</Title>
					<Subtitle>Realize sign-in com sua conta.</Subtitle>
				</TitleContainer>
			</Container>
		</GlobalLayout>
	);
}

export { SignIn };
