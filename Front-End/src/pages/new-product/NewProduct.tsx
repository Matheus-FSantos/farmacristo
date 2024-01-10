import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import {
	Label,
	Title,
	Button,
	Subtitle,
	TextArea,
	Container,
	InputsFlex,
	InputFilled,
	TextContainer,
	InputContainer,
	PriceContainer,
	RadioContainer,
	ButtonsContainer,
	CheckBoxContainer,
	PharmaciesContainer,
} from "./styles";

const NewProduct = (): React.ReactElement => {
	
	const [name, setName] = useState<string>("");
	const [brand, setBrand] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [promotionalPrice, setPromotionalPrice] = useState<number>(0);
	const [prescriptionIsRequired, setPrescriptionIsRequired] = useState<number>(0);
	const [image, setImage] = useState<string | ArrayBuffer | null>(null);


	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		promotionalPrice === 0 && setPromotionalPrice(price);
		
		console.log (
			{
					name,
					brand,
					description,
					price,
					"promotionalPrice": (promotionalPrice === 0 ? price : promotionalPrice),
					image,
					"prescriptionIsRequired": (prescriptionIsRequired === 1 ? true : false)
				}
		);
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

	useLayoutEffect(() => {
		gsap.to("#container", {
			opacity: 1,
			duration: 0.2
		});

		return () => {
			gsap.killTweensOf("#container");
		}
	}, []);
	
	return (
		<Container id="container">
			<TextContainer>
				<Title>Criar um produto</Title>
				<Subtitle>
					Crie um novo produto abaixo, campos obrigatórios são marcados com{" "}
					<span>*</span>
				</Subtitle>
			</TextContainer>
			
			<form onSubmit={ handleSubmit }>
				<InputsFlex>
					<InputContainer>
						<Label htmlFor="name">Nome: <span>*</span></Label>
						<InputFilled
							type="text"
							id="name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Ex.: Desodorante Antitranspirante Aerosol Masculino" />
					</InputContainer>

					<InputContainer>
						<Label htmlFor="name">Marca: <span>*</span></Label>
						<InputFilled
							type="text"
							id="name"
							required
							value={brand}
							onChange={(e) => setBrand(e.target.value)}
							placeholder="Ex.: Rexona" />
					</InputContainer>

					<InputContainer>
						<Label htmlFor="description">Descrição: <span>*</span></Label>
						<TextArea
							id="description"
							required
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Ex.: Desodorante Antitranspirante Aerosol Masculino Rexona Extracool 72 horas 150ml" />
					</InputContainer>

					<PriceContainer>
						<InputContainer>
							<Label htmlFor="price">
								Preço: <span>*</span>
								<InputFilled
									className="sm"
									type="number"
									id="price"
									required
									value={price}
									onChange={(e) => setPrice(Number(e.target.value))}
									placeholder="Ex.: 129.99" />
							</Label>
						</InputContainer>
						<InputContainer>
							<Label htmlFor="promotionalPrice">Preço promocional: <span className="text-muted">(Em caso de promoção)</span></Label>
							<InputFilled
								className="sm"
								type="number"
								id="promotionalPrice"
								value={promotionalPrice}
								onChange={(e) => setPromotionalPrice(Number(e.target.value))}
								placeholder="Ex.: 129.99"/>
						</InputContainer>
					</PriceContainer>

					<PharmaciesContainer>
						<Label>Selecione a(s) farmácia(s): <span>*</span></Label>
						<CheckBoxContainer>
							<div>
								<Label htmlFor="farmacia-01">Farmácia 01</Label>
								<input id="farmacia-01" value="1" type="checkbox" />
							</div>

							<div>
								<Label htmlFor="farmacia-02">Farmácia 02</Label>
								<input id="farmacia-02" value="2" type="checkbox" />
							</div>

							<div>
								<Label htmlFor="farmacia-03">Farmácia 03</Label>
								<input id="farmacia-03" value="3" type="checkbox" />
							</div>
						</CheckBoxContainer>
					</PharmaciesContainer>

					<RadioContainer>
						<Label htmlFor="prescriptionIsRequired">O produto necessita de receita? Clique aqui caso aplicavel</Label>
						<input
							type="checkbox"
							id="prescriptionIsRequired"
							value={prescriptionIsRequired} 
							onChange={() => {prescriptionIsRequired === 1 ? setPrescriptionIsRequired(0) : setPrescriptionIsRequired(1)}} />
					</RadioContainer>

					<InputContainer className="file">
						<Label>Selecine a imagem do produto: <span>*</span></Label>
						<input
							type="file"
							required
							accept="image/*"
							onChange={handleFileChange} />
					</InputContainer>
				</InputsFlex>

				<ButtonsContainer>
					<Button className="save" type="submit">Salvar produto</Button>
					<Button className="cancel">Cancelar</Button>
				</ButtonsContainer>
			</form>
		</Container>
	);
};

export { NewProduct };
