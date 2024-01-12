import styled from "styled-components";

const Input = styled.input`
	width: 100%;
	height: 2.5rem; /* 40px */
	
	font-size: 1rem;

	padding: 0.25rem 0.5rem; /* 4px and 8px*/

	border-radius: 0.313rem; /* 5px */
	border: 0.063rem solid var(--gray-100); /* 1px */

	background-color: transparent;
	color: var(--gray-800);

	&::placeholder {
		font-weight: 500;
	}

	&:focus {
		background-color: var(--white-1000);
		color: var(--black-900);

		outline-color: var(--blue-900);
		outline-style: solid;
		outline-width: thin;
	}

	&.filled {
		background-color: var(--gray-80);
	}

	&.sm {
		max-width: 31.25rem; /* 500px */
		width: 100%;
	}
`;

export { Input };
