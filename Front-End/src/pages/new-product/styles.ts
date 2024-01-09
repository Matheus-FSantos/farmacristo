import styled from "styled-components";

const Container = styled.section`
	padding: 2rem 6.25rem;
`

const TextContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 2px;
`;

const Title = styled.h1`
	font-size: 46px;
	font-weight: 700;
`;

const Subtitle = styled.h2`
	font-size: 12px;
	position: relative;
	left: 4px;

	span {
		color: red;
	}
`;

export {
	Title,
	Subtitle,
	Container,
	TextContainer,
}
