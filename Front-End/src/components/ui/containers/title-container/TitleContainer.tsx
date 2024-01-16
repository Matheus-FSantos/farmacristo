import { TitleContainer as TitleContainerComponent } from "./styles"

interface ITitleContainer {
	Type?: string | undefined
	children: React.ReactNode
}

const TitleContainer = ({ Type, children }: ITitleContainer): React.ReactElement => {
	return <TitleContainerComponent className={ Type }>{ children }</TitleContainerComponent>
}

export { TitleContainer };
