import { useState } from "react";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../layout/global/GlobalLayout";
import { Title as TitleLandingPage, Subtitle as SubtitleLandingPage } from "../landing-page/styles";

import { BannerContainer, WorkWithUsContainer, } from "./styles";

/* UI */
import { Toast } from "../../components/toast";
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

import { toast } from "react-toastify";
import { useTimeout } from "../../hooks/useTimeout";
import { CurriculumService } from "../../services/Curriculum.service";
import { useNavigate } from "react-router-dom";


const WorkWithUs = (): React.ReactElement => {
	useDinamicTitle("Trabalhe Conosco");

	const curriculumService = new CurriculumService();
	const navigate = useNavigate();

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [pdf, setPdf] = useState<File | null>(null);

	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		setIsDisabled(true);
		const body: INewCurriculumDTO = { name, email, description };
		const alert = toast.loading("Por favor, aguarde...");

		await useTimeout(1000);
		if(!pdf) {
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
			curriculumService.save(body).then(async (id) => {
				const formData = new FormData();
				formData.append("cv", pdf);
				
				curriculumService.updateCurriculumCV(id, formData);
				toast.update(alert, {
					render: "Curriculo enviado!",
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
				navigate("/");
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
			});;
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			const allowedTypes = ['application/pdf'];
	
			if (allowedTypes.includes(file.type)) {
				setPdf(file);
			} else {
				alert('Tipo de arquivo não suportado. Por favor, selecione uma imagem.');
				setPdf(null);
			}
		}
	};

	return (
		<>
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
								<span>entre no nosso banco de talentos!</span>
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
									onChange={ handleFileChange }
								/>
							</InputContainer>
						</InputsFlex>

						<ButtonsContainer>
							<Button ButtonType="save" Type="submit" isDisabled={ isDisabled }>
								Enviar
							</Button>
						</ButtonsContainer>
					</form>
				</WorkWithUsContainer>
			</GlobalLayout>

			<Toast />
		</>
	);
};

export { WorkWithUs };
