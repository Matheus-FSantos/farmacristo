import { API_INSTANCE } from "./config/Axios.api";

export class UsersService {
	
	private getAuthorization(loginUsername: string, loginPassword: string): IAuthorizationParams {
		return { username: loginUsername, password: loginPassword };
	}

	public async findAll(loginUsername: string, loginPassword: string): Promise<IUserDTO[]> {
		return await API_INSTANCE.get("/users", {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then((data) => data.data)
			.catch((error) => { throw Error(error) });
	}

	public async findById(loginUsername: string, loginPassowrd: string, userId: string): Promise<IUserDTO> {
		return await API_INSTANCE.get(`/users/${userId}`, {
			auth: this.getAuthorization(loginUsername, loginPassowrd)
		}).then((data) => data.data).catch((error) => error);
	}

	public async findUserImageById(loginUsername: string, loginPassword: string, userId: string) {
		try {
			const response = await API_INSTANCE.get(`/users/image/${ userId }`, {
				auth: this.getAuthorization(loginUsername, loginPassword),
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

	public async save(newUserDTO: INewUserDTO): Promise<string> {
		return await API_INSTANCE.post("/users", newUserDTO).then((data) => data.data).catch(error => {
			throw new Error(error.response.data.messages[0]);
		});
	}

	public async login(login: ILoginDTO): Promise<IUserReducedDTO | Error> {
		return await API_INSTANCE.post("/users/login", login).then(data => { return data.data }).catch(() => { throw new Error() });
	}

	public async update(loginUsername: string, loginPassword: string, userId: string, body: INewUserDTO) {
		return await API_INSTANCE.put(`/users/${ userId }`, body, {
			auth: this.getAuthorization(loginUsername, loginPassword)
		}).then(() => "Atualizado!").catch((error) => error.response.data.messages[0]);
	}

	public async updateUserImage(loginUsername: string, loginPassword: string, userId: string, formData: FormData) {
		return await API_INSTANCE.put(`/users/image/${userId}`, formData, {
			auth: this.getAuthorization(loginUsername, loginPassword),
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}).then(() => "SUCESSO!").catch((error) => error)
	}

	public async updateTierToAdmin(loginUsername: string, loginPassword: string, userId: string) {
		return await API_INSTANCE.put(`/users/tier-administrator/${ userId }`, null, {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then(() => "Atualizado com sucesso!")
			.catch((error) => error);
	}

	public async downgradeTierToClient(loginUsername: string, loginPassword: string, userId: string) {
		return await API_INSTANCE.put(`/users/tier-client/${ userId }`, null, {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then(() => "Atualizado com sucesso!")
			.catch((error) => error);
	}

	public async delete(loginUsername: string, loginPassword: string, userId: string) {
		return await API_INSTANCE.delete(`/users/${ userId }`, {
			auth: this.getAuthorization(loginUsername, loginPassword),
		}).then(() => "Usuário Deletado")
			.catch((error) => {
				throw new Error(error);
			});
	}

}
