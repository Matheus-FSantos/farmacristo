import { Subtitle as SubtitleComponent } from "./styles"

interface ISubtitleProps {
	Type?: string | undefined
	children: React.ReactNode
}

const Subtitle = ({ Type, children }: ISubtitleProps): React.ReactElement => {
	return <SubtitleComponent className={ Type }>{ children }</SubtitleComponent>
}

export { Subtitle };
