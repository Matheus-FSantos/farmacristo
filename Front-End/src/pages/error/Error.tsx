import { ArrowRightSVG } from "../../assets/icons/icons";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";
import { Container, SubtitleContainer, Link } from "./styles";

const Error = (): React.ReactElement => {

	useDinamicTitle("Erro");

	return (
		<Container>
			<h1>404 - Não encontrada!</h1>

			<SubtitleContainer>
				<p>A página que você tentou acessar não foi encontrada.</p>
				<Link href="/">
					Ir para o inicio{" "}
					<img src={ArrowRightSVG} alt="Flecha apontando para a esquerda" />
				</Link>
			</SubtitleContainer>
		</Container>
	);
};

export { Error };
