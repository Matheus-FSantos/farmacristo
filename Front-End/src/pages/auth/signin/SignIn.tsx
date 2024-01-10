import styled from "styled-components";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";

const Container = styled.section`
	padding: 0 6.25rem;
`;

const SignIn = (): React.ReactElement => {
	useDinamicTitle("Realizar sign-in");
	
	return (
		<Container>
			Realize seu login abaixo
		</Container>
	);
}

export { SignIn };
