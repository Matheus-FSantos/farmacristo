import GoogleLogin from "react-google-login";
import styles from "./styles.module.css";
import { useState } from "react";

const GoogleWidget = () => {
	
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();

	const googleAuth = (response: any) => {
		console.log(response);
	}
	
	return <GoogleLogin
					clientId="710413420317-djbtgvnsfu2bfe65h2kdb7qfflptocik.apps.googleusercontent.com"
					buttonText="Continuar com Google"
					onSuccess={ googleAuth }
					onFailure={ googleAuth }
					className={ styles.googleLoginBtn }
				 />
}

export { GoogleWidget };
