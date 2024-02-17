import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { PrivateRoute } from "../../../private-route";
import { Toast } from "../../../../../components/toast";
import { AuthService } from "../../../../../services/Auth.service";
import { useDinamicTitle } from "../../../../../hooks/useDinamicTitle";
import { PharmacyService } from "../../../../../services/Pharmacies.service";

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
import { convertToNumber } from "../../../../../services/DTO/utils /Numbers.utils";
import { toast } from "react-toastify";
import { useTimeout } from "../../../../../hooks/useTimeout";
import { ProductService } from "../../../../../services/Products.service";

interface IUpdateProductProps {
	onRequestClose: () => void
	OldProduct: IProductFullDTO
	Credentials: IUserReducedDTO
}

const UpdateProduct = ({ Credentials, OldProduct, onRequestClose }: IUpdateProductProps): React.ReactElement => {
	useDinamicTitle("Atualizar produto");

	const navigate = useNavigate();
	const authService = new AuthService();
	const productService = new ProductService();
	const pharmacyService = new PharmacyService();
	
	const [name, setName] = useState<string>("");
	const [brand, setBrand] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [promotionalPrice, setPromotionalPrice] = useState<number>(0);
	const [prescriptionIsRequired, setPrescriptionIsRequired] = useState<number>(0);
	const [selectedPharmacies, setSelectedPharmacies] = useState<string[]>([]);
	const [image, setImage] = useState<File | null>(null);

	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const [pharmacies, setPharmacies] = useState<IPharmacyReducedDTO[]>([]);

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		const pharmaciesFinal: INewProductPharmacy[] = [];
		selectedPharmacies.forEach((pharmacyId) => {
			pharmaciesFinal.push({ id: pharmacyId });
		});

		const body: INewProductDTO = {
			name,
			brand,
			description,
			price: Number(price),
			promotionalPrice: promotionalPrice === 0 ? null : Number(promotionalPrice),
			prescriptionIsRequired: prescriptionIsRequired === 1 ? true : false,
			pharmacies: pharmaciesFinal
		}
		const alert = toast.loading("Por favor, aguarde...");
		
		await useTimeout(1000);
		productService.update(Credentials.email, Credentials.password, OldProduct.infos.id, body)
			.then(async (message) => {
				if(image) {
					const formData = new FormData();
					formData.append("image", image);
					productService.updatePharmacyImage(Credentials.email, Credentials.password, OldProduct.infos.id, formData);
				}
				
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

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: string): void => {
		const isChecked = event.target.checked;

    setSelectedPharmacies(prevSelectedPharmacies => {
        if (isChecked) {
            return [...prevSelectedPharmacies, id];
        } else {
            return prevSelectedPharmacies.filter(selectedId => selectedId !== id);
        }
    });
	};

	const handleLogout = () => {
		authService.logout();
		navigate("/");
	}

	useEffect(() => {
		if(OldProduct.image != "") {
			setName(OldProduct.infos.name);
			setBrand(OldProduct.infos.brand);
			setPrice(convertToNumber(OldProduct.infos.price));

			if(OldProduct.infos.promotionalPrice !== OldProduct.infos.price)
				setPromotionalPrice(convertToNumber(OldProduct.infos.promotionalPrice));
	
			setDescription(OldProduct.infos.description);
			setPrescriptionIsRequired(OldProduct.infos.prescriptionIsRequired === true ? 1 : 0);

			/* to handle w. the "product is present on..." business role */
			const tempCheckedPharmacies: string[] = [...selectedPharmacies];
			OldProduct.infos.pharmacies.forEach((pharmacy) => {
				if(!tempCheckedPharmacies.includes(pharmacy.id))
					tempCheckedPharmacies.push(pharmacy.id);
			});
			setSelectedPharmacies(tempCheckedPharmacies);
		}
		pharmacyService.findAllReduced().then((data) => setPharmacies(data)).catch(() => { handleLogout() });
	}, []);

	return (
		<>
			<PrivateRoute>
				<Container>
					<TitleContainer>
						<Title>Atualizar produto</Title>
						<Subtitle>
							Atualize um produto abaixo, campos obrigatórios são marcados com{" "}
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
									{
										pharmacies.map(pharmacy =>
											<div key={ pharmacy.id }>
												<Label For={`pharmacy-${ pharmacy.id }`}>{ pharmacy.name }</Label>
												{ selectedPharmacies.includes(pharmacy.id) ? 
													<input id={`pharmacy-${ pharmacy.id }`} name={ pharmacy.id } checked={ true } type="checkbox" onChange={ (e) => handleCheckboxChange(e, pharmacy.id) }/>
												:
													<input id={`pharmacy-${ pharmacy.id }`} name={ pharmacy.id } checked={ false } type="checkbox" onChange={ (e) => handleCheckboxChange(e, pharmacy.id) }/> }
											</div>	
										)
									}
								</CheckBoxContainer>
							</PharmaciesContainer>

							<RadioContainer>
								<Label For="prescriptionIsRequired">
									O produto necessita de receita? Clique aqui caso aplicavel
								</Label>
								{
									prescriptionIsRequired === 1 ?
										<input
											type="checkbox"
											checked={ true }
											id="prescriptionIsRequired"
											value={ prescriptionIsRequired }
											onChange={() => {
												prescriptionIsRequired === 1
													? setPrescriptionIsRequired(0)
													: setPrescriptionIsRequired(1);
											}}
										/>
									:
										<input
											type="checkbox"
											checked={ false }
											id="prescriptionIsRequired"
											value={ prescriptionIsRequired }
											onChange={() => {
												prescriptionIsRequired === 1
													? setPrescriptionIsRequired(0)
													: setPrescriptionIsRequired(1);
											}}
										/>
								}
							</RadioContainer>

							<InputContainer InputContainerType="file">
								<Label Required={ false }>Selecine a imagem do produto:</Label>
								<input
									type="file"
									accept="image/*"
									onChange={ handleFileChange }
								/>
							</InputContainer>
						</InputsFlex>

						<ButtonsContainer>
							<Button ButtonType="save" Type="submit" isDisabled={ isDisabled }>
								Atualizar produto
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

export { UpdateProduct };
