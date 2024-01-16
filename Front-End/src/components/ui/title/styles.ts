import styled from "styled-components";

const Title = styled.h1`
	font-size: 2.875rem; /* 46px */
	font-weight: 700;

	&.sm {
		font-size: 2.25rem; /* 36px */
	}

	&.extra-bold {
		font-weight: 800;
	}

	&.green {
		color: var(--green-1000);
	}
`;

export { Title };
