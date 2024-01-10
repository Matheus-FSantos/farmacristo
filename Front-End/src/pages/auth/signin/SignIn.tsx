import { useDinamicTitle } from "../../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../../layout/global/GlobalLayout";

const SignIn = (): React.ReactElement => {
	
	useDinamicTitle("Entre em sua conta");
	
	return (
		<GlobalLayout>
			Realize seu login abaixo
		</GlobalLayout>
	);
}

export { SignIn };
