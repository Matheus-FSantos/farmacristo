import { useState } from "react";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../../layout/global/GlobalLayout";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Input } from "../../../components/ui/input/Input";
import { Label } from "../../../components/ui/label/Label";
import { Button } from "../../../components/ui/button/Button";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { InputContainer } from "../../../components/ui/containers/input-container/InputContainer";

import styled from "styled-components";

const Container = styled.section`
	padding: 2.5rem 0; /* 40px and 0 */
`;

const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const SignIn = (): React.ReactElement => {
	
	useDinamicTitle("Entre em sua conta");
	
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<GlobalLayout>
			<Container>
				<TitleContainer>
					<Title>Entrar</Title>
					<Subtitle>Realize sign-in com sua conta.</Subtitle>
				</TitleContainer>

				<InputContainer>
					<Label For="email" Required={ true }>E-Mail:</Label>
					<Input
						Id="email"
						Type="email"
						Value={ email }
						Required={ true }
						SetValue={ (e) => setEmail(e.target.value) }
						Placeholder="Ex.: exemplo@exemplo.com"
					/>
				</InputContainer>

				<InputContainer>
					<Label For="password" Required={ true }>Senha:</Label>
					<Input
						Id="password"
						Type="password"
						Value={ password }
						Required={ true }
						SetValue={ (e) => setPassword(e.target.value) }
						Placeholder="Ex.: YourPassword1234#"
					/>
				</InputContainer>

				<Button Type="submit" ButtonType="save">Entrar</Button>				
			</Container>
		</GlobalLayout>
	);
}

export { SignIn };
