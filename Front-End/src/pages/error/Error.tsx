import { ArrowRightSVG } from "../../assets/icons/icons";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { Container, SubtitleContainer, Link } from "./styles";

interface IErrorProps {
	title: string,
	subtitle: string
}

const Error = ({ title, subtitle }: IErrorProps): React.ReactElement => {

	useDinamicTitle("Erro");

	return (
		<Container>
			<h1>{ title }</h1>

			<SubtitleContainer>
				<p>{ subtitle }</p>
				<Link href="/">
					Ir para o inicio{" "}
					<img src={ ArrowRightSVG } alt="Flecha apontando para a esquerda" />
				</Link>
			</SubtitleContainer>
		</Container>
	);
};

export { Error };
