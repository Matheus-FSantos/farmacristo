import { Button as ButtonComponent } from "./styles";

interface IButtonProps {
	children: string
	ButtonType?: string | "save"
	Type?: "button" | "submit" | "reset" | undefined
	isDisabled?: boolean | false
	onClick?: () => void
}

const Button = ({ children, ButtonType, Type, isDisabled, onClick }: IButtonProps ) => {
	return <ButtonComponent className={ ButtonType } type={ Type } disabled={ isDisabled } onClick={ onClick }>
						{ children }
					</ButtonComponent>
}

export { Button };
