import { InputContainer as InputContainerComponent } from "./styles"; 

interface IInputContainer {
	children: React.ReactNode,
	InputContainerType?: string | "" | undefined
}

const InputContainer = ({ children, InputContainerType }: IInputContainer): React.ReactElement => {
	return(
		<InputContainerComponent className={ InputContainerType }>
			{ children }
		</InputContainerComponent>
	);
}

export { InputContainer };
