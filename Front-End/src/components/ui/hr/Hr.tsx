import { Hr as HrComponent } from "./styles";

interface IHrProps {
	Type?: string | undefined
}

const Hr = ({ Type }: IHrProps): React.ReactElement => {
	return <HrComponent className={ Type } />
}

export { Hr };
