import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { PrivateRoute } from "../../../private-route";
import { Toast } from "../../../../../components/toast";
import { useTimeout } from "../../../../../hooks/useTimeout";
import { useDinamicTitle } from "../../../../../hooks/useDinamicTitle";
import { PharmacyService } from "../../../../../services/Pharmacies.service";
import { getDefaultCEP } from "../../../../../services/DTO/utils /CEP.utils";
import { Container } from "../../../../../components/ui/containers/Container";
import { getDefaultNumber } from "../../../../../services/DTO/utils /Numbers.utils";

/* UI */
import { Input } from "../../../../../components/ui/input/Input";
import { Label } from "../../../../../components/ui/label/Label";
import { Title } from "../../../../../components/ui/title/Title";
import { Button } from "../../../../../components/ui/button/Button";
import { Subtitle } from "../../../../../components/ui/subtitle/Subtitle";
import { InputsFlex } from "../../../../../components/ui/containers/inputs-flex/InputsFlex";
import { TitleContainer } from "../../../../../components/ui/containers/title-container/TitleContainer";
import { InputContainer } from "../../../../../components/ui/containers/input-container/InputContainer";
import { ButtonsContainer } from "../../../../../components/ui/containers/buttons-container/ButtonsContainer";

interface IUpdatePharmacyProps {
	Infos: IPharmacyFullDTO
	onRequestClose: () => void
	Credentials: IUserReducedDTO
}

const UpdatePharmacy = ({ Infos, Credentials, onRequestClose }: IUpdatePharmacyProps) => {
	useDinamicTitle("Atualizar farmácia");

	const pharmacyService = new PharmacyService();

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [number, setNumber] = useState<string>("");
	const [postalCode, setPostalCode] = useState<string>("");
	const [image, setImage] = useState<File | null>(null);

	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		
		setIsDisabled(true);
		const body: INewPharmacyDTO = { name, email, number, postalCode };
		const alert = toast.loading("Por favor, aguarde...");

		pharmacyService.update(Credentials.email, Credentials.password, Infos.infos.id, body)
			.then(async (message) => {
				if(image) {
					const formData = new FormData();
					formData.append("image", image);
					pharmacyService.updatePharmacyImage(Credentials.email, Credentials.password, Infos.infos.id, formData);
				}

				await useTimeout(1000);
				toast.update(alert, {
					render: message,
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
			})
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

	useEffect(() => {
		if(Infos.image !== "") {
			setName(Infos.infos.name);
			setEmail(Infos.infos.email);
			setNumber(getDefaultNumber(Infos.infos.number));
			setPostalCode(getDefaultCEP(Infos.infos.postalCode));
		}
	}, []);

	return (
		<>
			<PrivateRoute>
				<Container>
					<TitleContainer>
						<Title>Atualizar farmácia</Title>
						<Subtitle>
							Atualize uma farmácia abaixo, campos obrigatórios são marcados
							com <span>*</span>
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
								<Label Required={false}>Insira uma foto para a farmácia:</Label>
								<input
									type="file"
									accept="image/*"
									onChange={handleFileChange}
								/>
							</InputContainer>
						</InputsFlex>

						<ButtonsContainer>
							<Button ButtonType="save" Type="submit" isDisabled={ isDisabled }>
								Atualizar farmácia
							</Button>
							<Button ButtonType="cancel" onClick={ onRequestClose }>Cancelar</Button>
						</ButtonsContainer>
					</form>
				</Container>
			</PrivateRoute>
			
			<Toast />
		</>
	);
};

export { UpdatePharmacy };
