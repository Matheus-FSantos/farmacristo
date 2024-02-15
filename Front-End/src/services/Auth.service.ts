import { UsersService } from "./Users.service";

class AuthService {
	
	usersService = new UsersService();

	isLogged(): boolean {
		if(sessionStorage.getItem("Credentials"))
			return true;
		else
			return false;
	}

	getCredentials(): IUserReducedDTO {
		const value = sessionStorage.getItem("Credentials");
		
		if(value)
			return JSON.parse(value);
		else
			throw new Error("Not found!");
	}

	setNewCredentials(newEmail: string, newPassword: string): void {
		try {
			const value = this.getCredentials();
			value.email = newEmail;
			value.password = newPassword;
			
			this.logout();
			sessionStorage.setItem("Credentials", JSON.stringify(value));
		} catch (error) { }
	}

	logout(): void {
		sessionStorage.clear();
	}

	async login(login: ILoginDTO): Promise<void | Error> {
		try {
			const data = await this.usersService.login(login);
			if(!this.isLogged())
				sessionStorage.setItem("Credentials", JSON.stringify(data));
		} catch (error) {
			throw new Error();
		}
	}

}

export { AuthService };
