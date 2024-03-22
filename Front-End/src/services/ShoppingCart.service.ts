import { API_INSTANCE } from "./config/Axios.api";

export class ShoppingCartSerice {

	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async login(shoppingCartId: string, productId: string, login: ILoginDTO): Promise<string | Error> {
		return await API_INSTANCE.post(`/shopping-cart/${shoppingCartId}/product/${productId}`, null, {
				auth: this.getAuthorization(login.email, login.password)
			}).then(() => "Produto adicionado!").catch((error) => { console.log(error); throw new Error() });
	}

}
