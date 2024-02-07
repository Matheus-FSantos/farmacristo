import { useState } from "react";
import { Input } from "../../../../../components/ui/input/Input";
import { Label } from "../../../../../components/ui/label/Label";
import { Title } from "../../../../../components/ui/title/Title";
import { Button } from "../../../../../components/ui/button/Button";
import { Subtitle } from "../../../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../../../components/ui/containers/inputs-flex/InputsFlex";
import { TitleContainer } from "../../../../../components/ui/containers/title-container/TitleContainer";
import { InputContainer } from "../../../../../components/ui/containers/input-container/InputContainer";
import { ButtonsContainer } from "../../../../../components/ui/containers/buttons-container/ButtonsContainer";

import { PrivateRoute } from "../../../private-route";
import { useDinamicTitle } from "../../../../../hooks/useDinamicTitle";
import { Container } from "../../../../../components/ui/containers/Container";

const UpdatePharmacy = () => {
	useDinamicTitle("Atualizar farmácia");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [number, setNumber] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [image, setImage] = useState<string | ArrayBuffer | null>(null);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();

		console.log({
			name,
			email,
			image,
			number,
		});
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
					<Title>Atualizar farmácia</Title>
					<Subtitle>
						Atualize uma farmácia abaixo, campos obrigatórios são marcados
						com <span>*</span>
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
								Placeholder="Ex.: Cristo Fórmulas"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="email" Required={true}>
								E-Mail:
							</Label>
							<Input
								Id="email"
								Value={email}
								SetValue={(e) => setEmail(e.target.value)}
								Required={true}
								Placeholder="Ex.: farmacristo@redefarmacristo.com.br"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="number" Required={true}>
								Número:
							</Label>
							<Input
								Id="number"
								Value={number}
								SetValue={(e) => setNumber(e.target.value)}
								Required={true}
								Placeholder="Ex.: 15996181099"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="postalCode" Required={true}>
								CEP:
							</Label>
							<Input
								Id="postalCode"
								Value={postalCode}
								SetValue={(e) => setPostalCode(e.target.value)}
								Required={true}
								Placeholder="Ex.: 08295100"
							/>
						</InputContainer>

						<InputContainer InputContainerType="file">
							<Label Required={true}>Insira uma foto para a farmácia:</Label>
							<input
								type="file"
								required
								accept="image/*"
								onChange={handleFileChange}
							/>
						</InputContainer>
					</InputsFlex>

					<ButtonsContainer>
						<Button ButtonType="save" Type="submit">
							Atualizar farmácia
						</Button>
						<Button ButtonType="cancel">Cancelar</Button>
					</ButtonsContainer>
				</form>
			</Container>
		</PrivateRoute>
	);
};

export { UpdatePharmacy };
