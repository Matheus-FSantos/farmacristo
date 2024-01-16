import { PriceAndButtonsContainer as PriceAndButtonsContainerComponent } from "./styles";

interface IPriceAndButtonsContainer {
	children: React.ReactNode
}

const PriceAndButtonsContainer = ({ children }: IPriceAndButtonsContainer): React.ReactElement => {
	return(
		<PriceAndButtonsContainerComponent>
			{ children }
		</PriceAndButtonsContainerComponent>
	);
}

export { PriceAndButtonsContainer };
