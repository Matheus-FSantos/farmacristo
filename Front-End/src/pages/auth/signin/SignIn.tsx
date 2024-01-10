import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { HeaderAlternative } from "../../../components/header/HeaderAlternative";
import { GlobalContainer } from "../../styles/global";

const SignIn = (): React.ReactElement => {
	
	useDinamicTitle("Realizar sign-in");
	
	return (
		<GlobalContainer>
			<HeaderAlternative />
			Realize seu login abaixo
		</GlobalContainer>
	);
}

export { SignIn };
