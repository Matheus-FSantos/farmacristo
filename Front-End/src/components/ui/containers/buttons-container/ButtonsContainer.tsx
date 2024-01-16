import { ButtonsContainer as ButtonsContainerComponent } from "./styles";

interface IButtonsContainer {
	children: React.ReactNode
}

const ButtonsContainer = ({ children }: IButtonsContainer): React.ReactElement => {
	return <ButtonsContainerComponent>{ children }</ButtonsContainerComponent>
}

export { ButtonsContainer };
