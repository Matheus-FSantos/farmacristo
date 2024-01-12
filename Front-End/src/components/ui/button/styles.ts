import styled from "styled-components";

const Button = styled.button`
	width: 100%;
	height: 2.5rem; /* 40px */

	background-color: transparent;
	border-radius: 0.313rem; /* 5px */
	border: 0.125rem solid; /* 2px */

	font-size: 1rem;
	font-weight: 600;
	
	&.save {
		border-color: var(--blue-900);
		color: var(--blue-900);
		
		&:hover {
			color: var(--white-1000);
			background-color: var(--blue-900);
		}
	}

	&.cancel {
		border-color: var(--red-500);
		background-color: var(--red-500);
		color: var(--white-1000);
		
		&:hover {
			filter: brightness(1.8)
		}
	}
`;

export { Button };
