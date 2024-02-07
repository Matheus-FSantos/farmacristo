import { useState } from "react";

import { PrivateRoute } from "../../../private-route";
import { useDinamicTitle } from "../../../../../hooks/useDinamicTitle";

/* UI */
import { Label } from "../../../../../components/ui/label/Label";
import { Title } from "../../../../../components/ui/title/Title";
import { Input } from "../../../../../components/ui/input/Input";
import { Button } from "../../../../../components/ui/button/Button";
import { Subtitle } from "../../../../../components/ui/subtitle/Subtitle";
import { TextArea } from "../../../../../components/ui/text-area/TextArea";
import { Container } from "../../../../../components/ui/containers/Container";
import { InputsFlex } from "../../../../../components/ui/containers/inputs-flex/InputsFlex";
import { TitleContainer } from "../../../../../components/ui/containers/title-container/TitleContainer";
import { InputContainer } from "../../../../../components/ui/containers/input-container/InputContainer";

import {
	PriceContainer,
	RadioContainer,
	ButtonsContainer,
	CheckBoxContainer,
	PharmaciesContainer,
} from "../new-product/styles";

const UpdateProduct = ({  }): React.ReactElement => {
	useDinamicTitle("Novo produto");

	const [name, setName] = useState<string>("");
	const [brand, setBrand] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [promotionalPrice, setPromotionalPrice] = useState<number>(0);
	const [prescriptionIsRequired, setPrescriptionIsRequired] =
		useState<number>(0);
	const [image, setImage] = useState<string | ArrayBuffer | null>(null);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		promotionalPrice === 0 && setPromotionalPrice(price);

		console.log({
			name,
			brand,
			description,
			price,
			promotionalPrice: promotionalPrice === 0 ? price : promotionalPrice,
			image,
			prescriptionIsRequired: prescriptionIsRequired === 1 ? true : false,
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
					<Title>Atualizar produto</Title>
					<Subtitle>
						Atualize um produto abaixo, campos obrigatórios são marcados com{" "}
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
								Placeholder="Ex.: Desodorante Antitranspirante Aerosol Masculino"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="name" Required={true}>
								Marca:
							</Label>
							<Input
								Id="name"
								Required={true}
								Value={brand}
								SetValue={(e) => setBrand(e.target.value)}
								Placeholder="Ex.: Rexona"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="description" Required={true}>
								Descrição:
							</Label>
							<TextArea
								Id="description"
								Required={true}
								Value={description}
								SetValue={(e) => setDescription(e.target.value)}
								Placeholder="Ex.: Desodorante Antitranspirante Aerosol Masculino Rexona Extracool 72 horas 150ml"
							/>
						</InputContainer>

						<PriceContainer>
							<InputContainer>
								<Label For="price" Required={true}>
									Preço:
								</Label>
								<Input
									Id="price"
									Type="number"
									InputType="sm"
									Value={price}
									Required={true}
									Placeholder="Ex.: 129.99"
									SetValue={(e) => setPrice(Number(e.target.value))}
								/>
							</InputContainer>
							<InputContainer>
								<Label For="promotionalPrice">
									Preço promocional:{" "}
									<span className="text-muted">(Opcional)</span>
								</Label>
								<Input
									Type="number"
									InputType="sm"
									Id="promotionalPrice"
									Value={promotionalPrice}
									Placeholder="Ex.: 129.99"
									SetValue={(e) => setPromotionalPrice(Number(e.target.value))}
								/>
							</InputContainer>
						</PriceContainer>

						<PharmaciesContainer>
							<Label Required={true}>Selecione a(s) farmácia(s):</Label>
							<CheckBoxContainer>
								<div>
									<Label For="farmacia-01">Farmácia 01</Label>
									<input id="farmacia-01" value="1" type="checkbox" />
								</div>

								<div>
									<Label For="farmacia-02">Farmácia 02</Label>
									<input id="farmacia-02" value="2" type="checkbox" />
								</div>

								<div>
									<Label For="farmacia-03">Farmácia 03</Label>
									<input id="farmacia-03" value="3" type="checkbox" />
								</div>
							</CheckBoxContainer>
						</PharmaciesContainer>

						<RadioContainer>
							<Label For="prescriptionIsRequired">
								O produto necessita de receita? Clique aqui caso aplicavel
							</Label>
							<input
								type="checkbox"
								id="prescriptionIsRequired"
								value={prescriptionIsRequired}
								onChange={() => {
									prescriptionIsRequired === 1
										? setPrescriptionIsRequired(0)
										: setPrescriptionIsRequired(1);
								}}
							/>
						</RadioContainer>

						<InputContainer InputContainerType="file">
							<Label Required={true}>Selecine a imagem do produto:</Label>
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
							Atualizar produto
						</Button>
						<Button ButtonType="cancel">Cancelar</Button>
					</ButtonsContainer>
				</form>
			</Container>
		</PrivateRoute>
	);
};

export { UpdateProduct };