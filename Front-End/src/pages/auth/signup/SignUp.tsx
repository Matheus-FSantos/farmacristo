import { useDinamicTitle } from "../../../hooks/useDinamicTitle";

import { Container, ContentContainer, OrContainer, OrHr, RedirectSpan } from "../signin/styles";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Input } from "../../../components/ui/input/Input";
import { Label } from "../../../components/ui/label/Label";
import { Button } from "../../../components/ui/button/Button";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../components/ui/containers/inputs-flex/InputsFlex";
import { InputContainer } from "../../../components/ui/containers/input-container/InputContainer";
import { TitleContainer } from "../../../components/ui/containers/title-container/TitleContainer";
import { useState } from "react";
import { GoogleWidget } from "../../../components/google-widget";

const SignUp = (): React.ReactElement => {
	useDinamicTitle("Cria uma conta");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
	}

	return(
		<Container>
			<ContentContainer className="signup">
				<TitleContainer>
					<Title>Nova conta</Title>
					<Subtitle>Campos obrigatórios marcados com <span>*</span></Subtitle>
				</TitleContainer>

				<div>
					<GoogleWidget />

					<OrContainer>
						<OrHr />
						<span>ou</span>
						<OrHr />
					</OrContainer>

					<form onSubmit={ handleSubmit }>
						<InputsFlex>
							<InputContainer>
								<Label For="name" Required={true}>
									Nome:
								</Label>
								<Input
									Id="name"
									Type="text"
									Value={ name }
									Required={ true }
									SetValue={(e) => setName(e.target.value)}
									Placeholder="Ex.: Fernando Gabriel"
								/>
							</InputContainer>
							<InputContainer>
								<Label For="email" Required={true}>
									E-Mail:
								</Label>
								<Input
									Id="email"
									Type="email"
									Value={ email }
									Required={ true }
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
									Value={ password }
									Required={ true }
									SetValue={(e) => setPassword(e.target.value)}
									Placeholder="Ex.: YourPassword1234#"
								/>
							</InputContainer>
							<RedirectSpan>Já possui uma conta? <a href="/sign-in">Clique aqui</a></RedirectSpan>
						</InputsFlex>


						<Button Type="submit" ButtonType="save">
							Criar
						</Button>
					</form>
				</div>
			</ContentContainer>
		</Container>
	);
}

export { SignUp };
