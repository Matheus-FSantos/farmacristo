import { Container as ContainerComponent } from "./styles";

interface IContainer {
	children?: React.ReactNode | undefined
	id?: string | undefined
	Type?: string | undefined
}

const Container = ({ children, id, Type }: IContainer): React.ReactElement => {
	return (
		<ContainerComponent id={ id } className={ Type }>
			{ children }
		</ContainerComponent>
	);
}

export { Container };
