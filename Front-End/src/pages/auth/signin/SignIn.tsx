import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../components/toast";
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
import { useTimeout } from "../../../hooks/useTimeout";
import { AuthService } from "../../../services/Auth.service";

const SignIn = (): React.ReactElement => {
	useDinamicTitle("Entre em sua conta");

	const authService = new AuthService();
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent): Promise<void>  => {
		e.preventDefault();
		setIsDisabled(true);

		authService.loggin();
		
		const alert = toast.loading("Por favor, aguarde...");
		await useTimeout(1000);
		toast.update(alert, {
			render: "Logado! Redirecionando...",
			type: "success",
			isLoading: false,
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
		setIsDisabled(false);
		await useTimeout(1000);

		navigate("/");
	};

	return (
		<>
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


							<Button Type="submit" ButtonType="save" isDisabled={ isDisabled }>
								Entrar
							</Button>
						</form>
					</div>
				</ContentContainer>
			
				<Logo src={ LogoPNG } alt="Logo da rede farmacristo, uma cruz em vermelho escuro com 2 listras transversais em azul escuro" onClick={ () => navigate("/") }/>
			</Container>
			
			<Toast />
		</>
	);
};

export { SignIn };
