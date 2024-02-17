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
import { PharmacyService } from "../../../../../services/Pharmacies.service";
import { toast } from "react-toastify";
import { Toast } from "../../../../../components/toast";
import { useTimeout } from "../../../../../hooks/useTimeout";

interface INewPharmacyProps {
	onRequestClose: () => void
	Credentials: IUserReducedDTO
}

const NewPharmacy = ({ Credentials, onRequestClose }: INewPharmacyProps) => {
	useDinamicTitle("Nova farmácia");

	const pharmacyService = new PharmacyService();

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [number, setNumber] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [image, setImage] = useState<File | null>(null);

	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		setIsDisabled(true);
		const body: INewPharmacyDTO = { name, email, number, postalCode };
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
			pharmacyService.save(Credentials.email, Credentials.password, body)
				.then(async (id) => {
					const formData = new FormData();
					formData.append("image", image);
					pharmacyService.updatePharmacyImage(Credentials.email, Credentials.password, id, formData);
					
					toast.update(alert, {
						render: "Farmácia criada!",
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
						<Title>Criar uma farmácia</Title>
						<Subtitle>
							Adicione uma nova farmácia ao site, campos obrigatórios são marcados
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
							<Button ButtonType="save" Type="submit" isDisabled={ isDisabled }>
								Salvar farmácia
							</Button>
							<Button ButtonType="cancel" onClick={ onRequestClose } isDisabled={ isDisabled }>Cancelar</Button>
						</ButtonsContainer>
					</form>
				</Container>
			</PrivateRoute>
		
			<Toast />
		</>
	);
};

export { NewPharmacy };
