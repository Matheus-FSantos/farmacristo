import styled from "styled-components";

const Container = styled.section`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: 1.25rem; /* 20px */

	border: 1px solid red;

	h1 {
		font-size: 24px;
	}
`;

const SubtitleContainer = styled.section`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	gap: 0.313rem; /* 5px */

	p {
		font-size: 18px;
	}

	a {
		font-size: 14px;

		&:hover {
			text-decoration: none;
		}
	}
`;

const Error = (): React.ReactElement => {
    return(
        <Container>
					<h1>404 - Não encontrado!</h1>
					
					<SubtitleContainer>
						<p>A página que você tentou acessar não foi encontrada.</p>
						<a href="/">Ir para o inicio</a>
					</SubtitleContainer>
				</Container>					
    );
}

export { Error };
