import { InputsFlex as InputsFlexComponent } from "./styles"

interface IInputsFlexProps {
	Type?: string | undefined
	children: React.ReactNode
}

const InputsFlex = ({ Type, children }: IInputsFlexProps): React.ReactElement => {
	return <InputsFlexComponent className={ Type }>{ children }</InputsFlexComponent>
}

export { InputsFlex };
