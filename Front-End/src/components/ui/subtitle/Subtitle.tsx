import { Subtitle as SubtitleComponent } from "./styles"

interface ISubtitleProps {
	children: React.ReactNode
}

const Subtitle = ({ children }: ISubtitleProps): React.ReactElement => {
	return <SubtitleComponent>{ children }</SubtitleComponent>
}

export { Subtitle };
