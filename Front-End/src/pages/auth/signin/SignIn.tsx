import { useState } from "react";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";

import { Container, ContentContainer, RedirectSpan } from "./styles";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Input } from "../../../components/ui/input/Input";
import { Label } from "../../../components/ui/label/Label";
import { Button } from "../../../components/ui/button/Button";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../components/ui/containers/inputs-flex/InputsFlex";
import { InputContainer } from "../../../components/ui/containers/input-container/InputContainer";
import { TitleContainer } from "../../../components/ui/containers/title-container/TitleContainer";
import { Logo } from "../../../components/header/styles";
import { LogoPNG } from "../../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

const SignIn = (): React.ReactElement => {
	useDinamicTitle("Entre em sua conta");

	const navigate = useNavigate();

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
							<RedirectSpan>Não possui uma conta? <a onClick={ () => navigate("/signup") }>Clique aqui</a></RedirectSpan>
						</InputsFlex>


						<Button Type="submit" ButtonType="save">
							Entrar
						</Button>
					</form>
				</div>
			</ContentContainer>
		
			<Logo src={ LogoPNG } alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro" onClick={ () => navigate("/") }/>
		</Container>
	);
};

export { SignIn };
