import { HeaderAlternative } from "../../components/header/HeaderAlternative";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalContainer } from "../styles/global";

const Home = (): React.ReactElement => {

	useDinamicTitle("Inicio");

	return (
		<GlobalContainer>
			<HeaderAlternative />
			home works!!!
		</GlobalContainer>
	);
};

export { Home };
