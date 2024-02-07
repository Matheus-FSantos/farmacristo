import { API_INSTANCE } from "./config/Axios.api";

interface IAuthorizationParams {
	username: string,
	password: string
}

export class UsersService {
	
	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async findAll(loginUsername: string, loginPassword: string) {
		return await API_INSTANCE.get("/users", {
			auth: this.getAuthorization(loginUsername, loginPassword)
		}).then((data) => { console.log(data); }).catch((error) => { console.log(`Exception :>> ${ error }`); });
	}

}
