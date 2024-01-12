import { TitleContainer as TitleContainerComponent } from "./styles"

interface ITitleContainer {
	children: React.ReactNode
}

const TitleContainer = ({ children }: ITitleContainer): React.ReactElement => {
	return <TitleContainerComponent>{ children }</TitleContainerComponent>
}

export { TitleContainer };
