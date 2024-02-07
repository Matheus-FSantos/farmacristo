import { useState } from "react";

import { PrivateRoute } from "../../../private-route";
import { useDinamicTitle } from "../../../../../hooks/useDinamicTitle";

/* UI */
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

const NewUser = (): React.ReactElement => {
	useDinamicTitle("Novo usuário");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [image, setImage] = useState<string | ArrayBuffer | null>(null);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		console.log(
			{
				name,
				email,
				password,
				image
			}
		);
		
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const file = e.target.files?.[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				if (event.target) {
					setImage(event.target.result);
				}
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<PrivateRoute>
			<Container>
				<TitleContainer>
					<Title>Criar um usuário</Title>
					<Subtitle>
						Crie um novo usuário abaixo, campos obrigatórios são marcados com{" "}
						<span>*</span>
					</Subtitle>
				</TitleContainer>

				<form onSubmit={handleSubmit}>
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
						<Button ButtonType="save" Type="submit">
							Salvar usuário
						</Button>
						<Button ButtonType="cancel">Cancelar</Button>
					</ButtonsContainer>
				</form>
			</Container>
		</PrivateRoute>
	);
};

export { NewUser };
