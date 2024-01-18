import { Label as LabelComponent } from "./styles";

interface ILabelProps {
	children?: string | React.ReactNode | ""
	For?: string | undefined
	Required?: boolean | false
	Type?: string | undefined
}

const Label = ({ children, For, Required, Type }: ILabelProps) => {
	return <LabelComponent htmlFor={ For } className={ Type }>{ children }{Required && <span>&nbsp;*</span>}</LabelComponent>;
}

export { Label };
