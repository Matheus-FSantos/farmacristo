import { Button as ButtonComponent } from "./styles";

interface IButtonProps {
	children: string
	ButtonType?: string | "save"
	Type?: "button" | "submit" | "reset" | undefined
	isDisabled?: boolean | false
}

const Button = ({ children, ButtonType, Type, isDisabled }: IButtonProps ) => {
	return <ButtonComponent className={ ButtonType } type={ Type } disabled={ isDisabled }>
						{ children }
					</ButtonComponent>
}

export { Button };
