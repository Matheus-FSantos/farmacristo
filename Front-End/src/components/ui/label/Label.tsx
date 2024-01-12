import { Label as LabelComponent } from "./styles";

interface ILabelProps {
	children?: string | React.ReactNode | ""
	For?: string | undefined
	Required?: boolean | false
}

const Label = ({ children, For, Required }: ILabelProps) => {
	return <LabelComponent htmlFor={ For }>{ children }{Required && <span>&nbsp;*</span>}</LabelComponent>;
}

export { Label };
