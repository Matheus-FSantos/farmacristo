import styled from "styled-components";

const Container = styled.section`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: 1.25rem; /* 20px */

	h1 {
		font-size: 1.5rem; /* 24px */
	}
`;

const SubtitleContainer = styled.section`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	gap: 0.5rem; /* 8px */

	p {
		font-size: 1.125rem; /* 18px */
	}

	a {
		font-size: 0.875rem; /* 14px */

		&:hover {
			text-decoration: none;
		}
	}

	@media only screen and (max-width: 422px) {
		p {
			font-size: 1rem;
			text-align: center;
		}
	}
`;

const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 0.5rem; /* 8px */

	img {
		width: 0.938rem; /* 15px */
	}

	&:hover {
		img {
			transform: translateX(0.625rem); /* 10px */
		}
	}
`;

export {
	Link,
	Container,
	SubtitleContainer,
}
