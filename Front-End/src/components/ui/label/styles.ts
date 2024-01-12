import styled from "styled-components";

const Label = styled.label`
	font-weight: 500;
	font-size: 1rem;

	color: var(--black-900);

	span {
		color: red;

		&.text-muted {
			font-size: 0.625rem; /* 10px */
			color: var(--gray-800);
		}
	}
`;

export { Label };
