import { API_INSTANCE } from "./config/Axios.api";

export class PharmacyService {
	
	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async findAll(): Promise<IPharmacyFullDTO[]> {
		try {
			const pharmacies: IPharmacyDTO[] = (await API_INSTANCE.get("/pharmacies")).data;
			const finalPharmaciesPromises: Promise<IPharmacyFullDTO>[] = pharmacies.map(async (pharmacy) => {
				const image = await this.findPharmacyImageById(pharmacy.id);

				const data: IPharmacyFullDTO = {
						image: image,
						infos: pharmacy
				};

				return data;
		});

		const finalPharmacies: IPharmacyFullDTO[] = await Promise.all(finalPharmaciesPromises);

		return finalPharmacies;
		} catch (error) {
			throw new Error();
		}
	}

	public async findByIdWithImage(pharmacyId: string): Promise<IPharmacyFullDTO> {
		try {
			const pharmacy = await this.findById(pharmacyId);
			const image = await this.findPharmacyImageById(pharmacyId);
			
			const data: IPharmacyFullDTO = {
				image: image,
				infos: pharmacy
			}

			return data;
		} catch (error) {
			throw new Error();
		}
	}

	public async findById(pharmacyId: string): Promise<IPharmacyDTO> {
		return await API_INSTANCE.get(`/pharmacies/${ pharmacyId }`).then((data) => data.data).catch((error) => error);
	}

	public async findPharmacyImageById(pharmacyId: string) {
		try {
			const response = await API_INSTANCE.get(`/pharmacies/image/${ pharmacyId }`, {
				responseType: "arraybuffer",
			});
	
			if(response.status === 200) {
				const blob = new Blob([response.data], { type: response.headers["content-type"] });
				const imageUrl = URL.createObjectURL(blob);
				return imageUrl;
			} else {
				return "";
			}
		} catch (error) {
			throw error;
		}
	}

	public async save(loginUsername: string, loginPassword: string, newPharmacy: INewPharmacyDTO) {
		return await API_INSTANCE.post("/pharmacies", newPharmacy, {
			auth: this.getAuthorization(loginUsername, loginPassword)
		}).then((data) => data.data).catch(error => {
			throw new Error(error.response.data.messages[0]);
		});
	}

	public async update(loginUsername: string, loginPassword: string, pharmacyId: string, updatedPharmacy: INewPharmacyDTO) {
		return await API_INSTANCE.put(`/pharmacies/${ pharmacyId }`, updatedPharmacy, {
			auth: this.getAuthorization(loginUsername, loginPassword)
		}).then(() => "Atualizado!").catch(error => {
			throw new Error(error.response.data.messages[0]);
		});
	}

	public async updatePharmacyImage(loginUsername: string, loginPassword: string, pharmacyId: string, formData: FormData) {
		return await API_INSTANCE.put(`/pharmacies/image/${ pharmacyId }`, formData, {
			auth: this.getAuthorization(loginUsername, loginPassword),
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}).then(() => "Atualizado!").catch((error) => error)
	}

	public async delete(loginUsername: string, loginPassword: string, pharmacyId: string) {
		return await API_INSTANCE.delete(`/pharmacies/${ pharmacyId }`, {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then(() => "Farmácia Deletada!")
			.catch((error) => {
				throw new Error(error);
			});
	}

}
