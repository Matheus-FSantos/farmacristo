import styled from "styled-components";

const TextArea = styled.textarea`
	width: 100%;
	height: 9.375rem; /* 150px */

	resize: none;
	
	font-size: 1rem;

	padding: 0.25rem 0.5rem;

	border-radius: 0.313rem;
	border: 0.063rem solid var(--gray-100); /* 1px */

	background-color: transparent;
	color: var(--gray-800);

	&.filled {
		background-color: var(--gray-80);
	}

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
`;

export { TextArea };
