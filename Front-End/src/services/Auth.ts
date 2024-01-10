class AuthService {
	
	isLogged(): boolean {
		if(sessionStorage.getItem("TOKEN"))
			return true;
		else
			return false;
	}

}

export { AuthService };
