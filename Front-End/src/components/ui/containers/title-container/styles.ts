import styled from "styled-components";

const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 0.125rem; /* 2px */

	&.xl {
		gap: 0.625rem; /* 10px */
	}

	&.xxl {
		gap: 1.25rem; /* 20px */
	}

	&.center {
		justify-content: center;
		align-items: center;
	}
`;

export { TitleContainer };
