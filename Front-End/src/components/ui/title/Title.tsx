import { Title as TitleComponent } from "./styles";

interface ITitleProps {
	Type?: string | undefined
	children: React.ReactNode
}

const Title = ({ Type, children }: ITitleProps): React.ReactElement => {
	return <TitleComponent className={ Type }>{ children }</TitleComponent>
}

export { Title };
