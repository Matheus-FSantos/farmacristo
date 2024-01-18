import styled from "styled-components";

const Subtitle = styled.h2`
	font-size: 0.75rem; /* 12px */
	color: var(--black-1000);
	
	span {
		color: red;
	}

	&.xl {
		font-size: 0.9rem;
	}

	&.green {
		color: var(--green-1000);
	}
`;

export { Subtitle };
