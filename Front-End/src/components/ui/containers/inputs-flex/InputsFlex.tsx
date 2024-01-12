import { InputsFlex as InputsFlexComponent } from "./styles"

interface IInputsFlexProps {
	children: React.ReactNode
}

const InputsFlex = ({ children }: IInputsFlexProps): React.ReactElement => {
	return <InputsFlexComponent>{ children }</InputsFlexComponent>
}


export { InputsFlex };
