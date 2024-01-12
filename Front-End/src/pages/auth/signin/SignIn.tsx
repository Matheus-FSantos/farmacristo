import { useState } from "react";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../../layout/global/GlobalLayout";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Input } from "../../../components/ui/input/Input";
import { Label } from "../../../components/ui/label/Label";
import { Button } from "../../../components/ui/button/Button";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../components/ui/containers/inputs-flex/InputsFlex";
import { InputContainer } from "../../../components/ui/containers/input-container/InputContainer";
import { TitleContainer } from "../../../components/ui/containers/title-container/TitleContainer";

import styled from "styled-components";

const Container = styled.section`
	padding: 2.5rem 0; /* 40px and 0 */
`;

const OrContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 0.313rem; /* 5px */

	margin-top: 1.875rem; /* 30px */

	span {
		font-size: 0.75rem;   /* 12px */
		font-weight: 700;

		color: var(--gray-120);

		position: relative;
		bottom: 0.094rem; /* 1.5px */
	}
`;

const OrHr = styled.section`
	width: 100%;
	height: 0.125rem; /* 2px */

	background-color: var(--gray-120);

	border-radius: 0.125rem; /* 2px */
`;

const SignIn = (): React.ReactElement => {
	useDinamicTitle("Entre em sua conta");

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();		
	}

	return (
		<GlobalLayout>
			<Container>
				<TitleContainer>
					<Title>Entrar</Title>
					<Subtitle>Realize sign-in com sua conta.</Subtitle>
				</TitleContainer>

				<OrContainer>
					<OrHr />
					<span>ou</span>
					<OrHr />
				</OrContainer>

				<form onSubmit={handleSubmit}>
					<InputsFlex>
						<InputContainer>
							<Label For="email" Required={true}>
								E-Mail:
							</Label>
							<Input
								Id="email"
								Type="email"
								Value={email}
								Required={true}
								SetValue={(e) => setEmail(e.target.value)}
								Placeholder="Ex.: exemplo@exemplo.com"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="password" Required={true}>
								Senha:
							</Label>
							<Input
								Id="password"
								Type="password"
								Value={password}
								Required={true}
								SetValue={(e) => setPassword(e.target.value)}
								Placeholder="Ex.: YourPassword1234#"
							/>
						</InputContainer>
					</InputsFlex>

					<Button Type="submit" ButtonType="save">
						Entrar
					</Button>
				</form>
			</Container>
		</GlobalLayout>
	);
};

export { SignIn };
