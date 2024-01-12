import { Title as TitleComponent } from "./styles";

interface ITitleProps {
	children: React.ReactNode
}

const Title = ({ children }: ITitleProps): React.ReactElement => {
	return <TitleComponent>{ children }</TitleComponent>
}

export { Title };
