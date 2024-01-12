import { TextArea as TextAreaComponent } from "./styles"

interface ITextAreaProps {
	Id?: string | undefined
	Value: string | number
	Name?: string | undefined
	Required?: boolean
	Placeholder: string | ""
	TextAreaType?: string | ""
	SetValue: (e: any) => void
}

const TextArea = ({ Id, Value, Name, Required, SetValue, TextAreaType, Placeholder, }: ITextAreaProps) => {
	return <TextAreaComponent
						id={ Id }
						name={ Name }
						value={ Value }
						required={ Required }
						onChange={ SetValue }
						className={ TextAreaType }
						placeholder={ Placeholder }
					/>
}

export { TextArea };
