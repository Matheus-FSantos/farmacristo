class AuthService {
	
	isLogged(): boolean {
		if(sessionStorage.getItem("TOKEN"))
			return true;
		else
			return false;
	}

	loggin(): void {
		if(!this.isLogged())
			sessionStorage.setItem("TOKEN", "TOKEN ALEATORIO");
	}

}

export { AuthService };
