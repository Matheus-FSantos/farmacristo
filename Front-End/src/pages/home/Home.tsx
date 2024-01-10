import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { GlobalLayout } from "../../layout/global/GlobalLayout";

const Home = (): React.ReactElement => {

	useDinamicTitle("Inicio");

	return (
		<GlobalLayout>
			Home Works!!!!
		</GlobalLayout>
	);
};

export { Home };
