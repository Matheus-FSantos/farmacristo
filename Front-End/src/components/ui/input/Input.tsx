import { Input as InputElement } from "./styles";

interface IInputProps {
	Id?: string
	Type?: string | "text"
	Value: string | number
	Name?: string | undefined
	Required?: boolean
	InputType?: string | ""
	Placeholder: string | ""
	SetValue: (e: any) => void
}

const Input = ({ Id, Type, Name, Value, SetValue, InputType, Required, Placeholder }: IInputProps) => {
	return <InputElement
						type={ Type }
						id={ Id }
						name={ Name }
						className={ InputType }
						required={ Required }
						value={ Value }
						onChange={ SetValue }
						placeholder={ Placeholder }
					/>
}

export { Input };
