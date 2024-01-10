import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Container, Subtitle, TextContainer, Title, InputContainer, InputFilled, Label, PriceContainer, TextArea } from "./styles";

const NewProduct = () => {
	
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
			
			<InputContainer>
				<Label htmlFor="name">Nome: <span>*</span></Label>
				<InputFilled type="text" id="name" placeholder="Ex.: Rexona" />
			</InputContainer>

			<InputContainer>
				<Label htmlFor="description">Descrição: <span>*</span></Label>
				<TextArea id="description" placeholder="Ex.: Antitranspirante Rexona 150 ML" />
			</InputContainer>

			<PriceContainer>
				<InputContainer>
					<Label htmlFor="price">Preço: <span>*</span></Label>
					<InputFilled type="number" id="price" placeholder="Ex.: 129.99" className="sm" />
				</InputContainer>
				<InputContainer>
					<Label htmlFor="promotionalPrice">Preço promocional: <span className="text-muted">(Em caso de promoção)</span></Label>
					<InputFilled type="number" id="promotionalPrice" placeholder="Ex.: 129.99" className="sm" />
				</InputContainer>
			</PriceContainer>
		</Container>
	);
};

export { NewProduct };
