import { useState } from "react";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../components/toast";
import { useTimeout } from "../../../hooks/useTimeout";

import { Container, ContentContainer, RedirectSpan } from "../signin/styles";

/* UI */
import { Title } from "../../../components/ui/title/Title";
import { Input } from "../../../components/ui/input/Input";
import { Label } from "../../../components/ui/label/Label";
import { Button } from "../../../components/ui/button/Button";
import { Subtitle } from "../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../components/ui/containers/inputs-flex/InputsFlex";
import { InputContainer } from "../../../components/ui/containers/input-container/InputContainer";
import { TitleContainer } from "../../../components/ui/containers/title-container/TitleContainer";
import { UsersService } from "../../../services/Users.service";

const SignUp = (): React.ReactElement => {
	useDinamicTitle("Cria uma conta");

	const navigate = useNavigate();

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const usersService = new UsersService();

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		setIsDisabled(true);
		
		const alert = toast.loading("Por favor, aguarde...");
		usersService.save({ name, email, password}).then(async () => {
			await useTimeout(1000);
			toast.update(alert, {
				render: "Usuário criado!",
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
			navigate("/signin");
		}).catch(async (error) => {
			await useTimeout(1000);
			toast.update(alert, {
				render: error  + "",
				type: "error",
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
			console.clear();
			await useTimeout(1000);
			setIsDisabled(false);
		});
	}

	return (
		<>
			<Container>
				<ContentContainer className="signup">
					<TitleContainer>
						<Title>Nova conta</Title>
						<Subtitle>Campos obrigatórios marcados com <span>*</span></Subtitle>
					</TitleContainer>

					<div>
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
								<RedirectSpan>Já possui uma conta? <a onClick={ () => navigate("/signin") }>Clique aqui</a></RedirectSpan>
							</InputsFlex>


							<Button Type="submit" ButtonType="save" isDisabled={ isDisabled }>
								Criar
							</Button>
						</form>
					</div>
				</ContentContainer>

			</Container>
			<Toast />
		</>
	);
}

export { SignUp };
