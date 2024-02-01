import { useState } from "react";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../layout/global/GlobalLayout";
import { Title as TitleLandingPage, Subtitle as SubtitleLandingPage } from "../landing-page/styles";

import { BannerContainer, WorkWithUsContainer } from "./styles";

/* UI */
import { Title } from "../../components/ui/title/Title";
import { Label } from "../../components/ui/label/Label";
import { Input } from "../../components/ui/input/Input";
import { Button } from "../../components/ui/button/Button";
import { Subtitle } from "../../components/ui/subtitle/Subtitle";
import { TextArea } from "../../components/ui/text-area/TextArea";
import { InputsFlex } from "../../components/ui/containers/inputs-flex/InputsFlex";
import { InputContainer } from "../../components/ui/containers/input-container/InputContainer";
import { TitleContainer } from "../../components/ui/containers/title-container/TitleContainer";
import { ButtonsContainer } from "../../components/ui/containers/buttons-container/ButtonsContainer";

const WorkWithUs = (): React.ReactElement => {
	useDinamicTitle("Trabalhe Conosco");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [pdfBuffer, setPdfBuffer] = useState<string | ArrayBuffer | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log({
			name,
			email,
			description,
			pdfBuffer,
		});
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				if (event.target) {
					const buffer = event.target.result as ArrayBuffer;
					setPdfBuffer(buffer);
				}
			};

			reader.readAsArrayBuffer(file);
		}
	};
	return (
		<GlobalLayout>
			<WorkWithUsContainer>
				<BannerContainer>
					<TitleContainer Type="xxl center">
						<TitleLandingPage className="center">
							Faça parte do
							<br />
							<span>time Farmacristo</span>
						</TitleLandingPage>
						<SubtitleLandingPage className="center">
							Preencha o formulário abaixo e{" "}
							<span>entre no nosso banco de taletos!</span>
						</SubtitleLandingPage>
					</TitleContainer>
				</BannerContainer>
				<TitleContainer>
					<Title Type="sm">Carreiras</Title>
					<Subtitle>
						Venha fazer parte do nosso time, trabalhe conosco!
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
								Placeholder="Ex.: Ricardo da Silva Santos"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="email" Required={true}>
								E-Mail:
							</Label>
							<Input
								Id="email"
								Type="email"
								Value={email}
								SetValue={(e) => setEmail(e.target.value)}
								Required={true}
								Placeholder="Ex.: ricardo@gmail.com"
							/>
						</InputContainer>

						<InputContainer>
							<Label For="description" Required={true}>
								Informação adicional:
							</Label>
							<TextArea
								Id="description"
								Required={true}
								Value={description}
								SetValue={(e) => setDescription(e.target.value)}
								Placeholder="Informe algo que considera relevante sobre você"
							/>
						</InputContainer>

						<InputContainer InputContainerType="file">
							<Label Required={true}>Selecione seu curriculo:</Label>
							<input
								type="file"
								required
								accept="application/pdf"
								onChange={handleFileChange}
							/>
						</InputContainer>
					</InputsFlex>

					<ButtonsContainer>
						<Button ButtonType="save" Type="submit">
							Enviar
						</Button>
					</ButtonsContainer>
				</form>
			</WorkWithUsContainer>
		</GlobalLayout>
	);
};

export { WorkWithUs };
