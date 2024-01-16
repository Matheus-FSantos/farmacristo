import { PricesContainer as PricesContainerComponent } from "./styles";

interface IPricesContainer {
	children: React.ReactNode
}

const PricesContainer = ({ children }: IPricesContainer): React.ReactElement => {
	return(
		<PricesContainerComponent>
			{ children }
		</PricesContainerComponent>
	);
}

export { PricesContainer };
