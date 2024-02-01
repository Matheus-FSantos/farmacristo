import { TitleContainer as TitleContainerComponent } from "./styles"

interface ITitleContainer {
	id?: string | undefined
	Type?: string | undefined
	children: React.ReactNode
}

const TitleContainer = ({ id, Type, children }: ITitleContainer): React.ReactElement => {
	return <TitleContainerComponent id={ id } className={ Type }>{ children }</TitleContainerComponent>
}

export { TitleContainer };
