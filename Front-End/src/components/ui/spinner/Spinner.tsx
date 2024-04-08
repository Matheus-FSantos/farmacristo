import { StyledSpinner } from "./styles";

interface ISpinnerProps {
	className?: string	
} 

const Spinner = ({ className }: ISpinnerProps ) => {
	return (
		<StyledSpinner className={ className } viewBox="0 0 50 50">
			<circle
				className="path"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="4"
			/>
  	</StyledSpinner>
	);
}

export { Spinner };
