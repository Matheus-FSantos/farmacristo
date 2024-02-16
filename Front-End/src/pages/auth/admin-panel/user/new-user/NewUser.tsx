import { useState } from "react";

import { PrivateRoute } from "../../../private-route";
import { useDinamicTitle } from "../../../../../hooks/useDinamicTitle";

/* UI */
import { Toast } from "../../../../../components/toast";
import { Label } from "../../../../../components/ui/label/Label";
import { Title } from "../../../../../components/ui/title/Title";
import { Input } from "../../../../../components/ui/input/Input";
import { Button } from "../../../../../components/ui/button/Button";
import { Subtitle } from "../../../../../components/ui/subtitle/Subtitle";
import { Container } from "../../../../../components/ui/containers/Container";
import { InputsFlex } from "../../../../../components/ui/containers/inputs-flex/InputsFlex";
import { TitleContainer } from "../../../../../components/ui/containers/title-container/TitleContainer";
import { InputContainer } from "../../../../../components/ui/containers/input-container/InputContainer";

import { ButtonsContainer } from "../../product/new-product/styles";
import { UsersService } from "../../../../../services/Users.service";
import { toast } from "react-toastify";
import { useTimeout } from "../../../../../hooks/useTimeout";

interface INewUserProps {
	onRequestClose: () => void
	Credentials: {
		id: string
		email: string
		password: string,
	}
}

const NewUser = ({ onRequestClose, Credentials }: INewUserProps): React.ReactElement => {
	useDinamicTitle("Novo usuário");

	const usersService = new UsersService();

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [image, setImage] = useState<File | null>(null);

	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		setIsDisabled(true);
		const body: INewUserDTO = { name, email, password };
		const alert = toast.loading("Por favor, aguarde...");

		await useTimeout(1000);
		if(!image) {
			toast.update(alert, {
				render: "Selecione uma imagem!",
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
			setIsDisabled(false);
		} else {
			usersService.save(body).then(async (id) => {
				const formData = new FormData();
				formData.append("image", image);
				usersService.updateUserImage(Credentials.email, Credentials.password, id, formData);
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
				await useTimeout(1000);
				window.location.reload();
			}).catch(async (error) => {
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
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			const allowedTypes = ['image/jpeg', 'image/png'];
	
			if (allowedTypes.includes(file.type)) {
				setImage(file);
			} else {
				alert('Tipo de arquivo não suportado. Por favor, selecione uma imagem.');
				setImage(null);
			}
		}
	};

	return (
		<>
			<PrivateRoute>
				<Container>
					<TitleContainer>
						<Title>Criar um usuário</Title>
						<Subtitle>
							Crie um novo usuário abaixo, campos obrigatórios são marcados com{" "}
							<span>*</span>
						</Subtitle>
					</TitleContainer>

					<form onSubmit={ handleSubmit }>
						<InputsFlex>
							<InputContainer>
								<Label For="name" Required={true}>
									Nome:
								</Label>
								<Input
									Id="name"
									Value={name}
									SetValue={(e) => setName(e.target.value)}
									Required={true}
									Placeholder="Ex.: Ricardo Silva"
								/>
							</InputContainer>

							<InputContainer>
								<Label For="email" Required={true}>
									E-Mail:
								</Label>
								<Input
									Id="email"
									Value={ email }
									SetValue={(e) => setEmail(e.target.value)}
									Required={true}
									Placeholder="Ex.: exemplo@gmail.com"
								/>
							</InputContainer>

							<InputContainer>
								<Label For="password" Required={true}>
									Senha:
								</Label>
								<Input
									Id="password"
									Value={ password }
									SetValue={(e) => setPassword(e.target.value)}
									Required={true}
									Placeholder="Ex.: suaSenhaSecreta123#"
								/>
							</InputContainer>

							<InputContainer InputContainerType="file">
								<Label Required={true}>Insira uma imagem:</Label>
								<input
									type="file"
									required
									accept="image/*"
									onChange={ handleFileChange }
								/>
							</InputContainer>
						</InputsFlex>

						<ButtonsContainer>
							<Button ButtonType="save" Type="submit" isDisabled={ isDisabled }>
								Salvar usuário
							</Button>
							<Button ButtonType="cancel" Type="button" onClick={ onRequestClose } isDisabled={ isDisabled }>Cancelar</Button>
						</ButtonsContainer>
					</form>
				</Container>
			</PrivateRoute>

			<Toast />
		</>
	);
};

export { NewUser };
