import { useState } from "react";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { GoogleWidget } from "../../../components/google-widget";

import { Container, ContentContainer, OrContainer, OrHr, RedirectSpan } from "./styles";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Input } from "../../../components/ui/input/Input";
import { Label } from "../../../components/ui/label/Label";
import { Button } from "../../../components/ui/button/Button";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../components/ui/containers/inputs-flex/InputsFlex";
import { InputContainer } from "../../../components/ui/containers/input-container/InputContainer";
import { TitleContainer } from "../../../components/ui/containers/title-container/TitleContainer";

const SignIn = (): React.ReactElement => {
	useDinamicTitle("Entre em sua conta");

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
	};

	return (
		<Container>
			<ContentContainer>
				<TitleContainer>
					<Title>Entrar</Title>
					<Subtitle>Realize sign-in com sua conta.</Subtitle>
				</TitleContainer>

				<div>
					<GoogleWidget />

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
							<RedirectSpan>Não possui uma conta? <a href="/sign-up">Clique aqui</a></RedirectSpan>
						</InputsFlex>


						<Button Type="submit" ButtonType="save">
							Entrar
						</Button>
					</form>
				</div>
			</ContentContainer>
		</Container>
	);
};

export { SignIn };
