import { API_INSTANCE } from "./config/Axios.api";

export class ShoppingCartService {

	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async findAllProducts(userId: string, login: ILoginDTO): Promise<IShoppingCartDTO> {
		return await API_INSTANCE.get(`/shopping-cart/${userId}`, {
				auth: this.getAuthorization(login.email, login.password)
			}).then((data) => data.data).catch((error) => { throw new Error(error.response.data.description) });
	}

	public async addProduct(userId: string, productId: string, login: ILoginDTO): Promise<string | Error> {
		return await API_INSTANCE.post(`/shopping-cart/${userId}/product/${productId}`, null, {
				auth: this.getAuthorization(login.email, login.password)
			}).then(() => "Produto adicionado!").catch((error) => { throw new Error(error.response.data.description) });
	}

	public async removeProduct(userId: string, productId: string, login: ILoginDTO): Promise<string | Error> {
		return await API_INSTANCE.delete(`/shopping-cart/${userId}/product/${productId}`, {
				auth: this.getAuthorization(login.email, login.password)
			}).then(() => "Produto adicionado!").catch((error) => { console.log(error.response.data.description); throw new Error() });
	}

}
