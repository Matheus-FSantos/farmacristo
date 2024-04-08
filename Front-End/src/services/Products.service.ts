import { API_INSTANCE } from "./config/Axios.api";

export class ProductService {
	
	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async findAll(): Promise<IProductFullDTO[]> {
		try {
			const products: IProductDTO[] = (await API_INSTANCE.get("/products")).data;
			const finalProductsPromises: Promise<IProductFullDTO>[] = products.map(async (products) => {
				const image = await this.findProductsImageById(products.id);

				const data: IProductFullDTO = {
						image: image,
						infos: products
				};

				return data;
			});

			const finalPharmacies: IProductFullDTO[] = await Promise.all(finalProductsPromises);

			return finalPharmacies;
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	}

	public async findProductsImageById(productId: string) {
		try {
			const response = await API_INSTANCE.get(`/products/image/${ productId }`, {
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

	public async save(loginUsername: string, loginPassword: string, newProduct: INewProductDTO) {
		return await API_INSTANCE.post("/products", newProduct, {
			auth: this.getAuthorization(loginUsername, loginPassword)
		}).then((data) => data.data).catch(error => {
			console.log(error);
			throw new Error(error.response.data.messages[0]);
		});
	}

	public async update(loginUsername: string, loginPassword: string, productId: string, updatedProduct: INewProductDTO) {
		return await API_INSTANCE.put(`/products/${ productId }`, updatedProduct, {
			auth: this.getAuthorization(loginUsername, loginPassword)
		}).then(() => "Atualizado!").catch(error => {
			throw new Error(error.response.data.messages[0]);
		});
	}

	public async updatePharmacyImage(loginUsername: string, loginPassword: string, productId: string, formData: FormData) {
		return await API_INSTANCE.put(`/products/image/${ productId }`, formData, {
			auth: this.getAuthorization(loginUsername, loginPassword),
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}).then(() => "Atualizado!").catch((error) => error)
	}

	public async delete(loginUsername: string, loginPassword: string, pharmacyId: string) {
		return await API_INSTANCE.delete(`/products/${ pharmacyId }`, {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then(() => "Produto Deletado!")
			.catch((error) => {
				throw new Error(error);
			});
	}

}
