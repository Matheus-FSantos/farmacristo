import styled from "styled-components";

const Title = styled.h1`
	font-size: 2.875rem; /* 46px */
	font-weight: 700;

	color: var(--black-1000);

	&.sm {
		font-size: 2.25rem; /* 36px */
	}

	&.extra-bold {
		font-weight: 800;
	}

	&.green {
		color: var(--green-1000);
	}

	&.white {
		color: var(--white-1000);
	}

	@media only screen and (max-width: 1310px) {
		font-size: 2.375rem; /* 38px */
	
		&.sm {
			font-size: 1.75rem; /* 28px */
		}
	}

	@media only screen and (max-width: 545px) {
		font-size: 1.75rem; /* 28px */
		
		&.sm {
			font-size: 1.4rem; /* 22.4px */
		}
	}

	@media only screen and (max-width: 465px) {
		font-size: 1.5rem; /* 24px */
	}

	@media only screen and (max-width: 390px) {
		&.sm {
			font-size: 1.25rem; /* 20px */
		}
	}
`;

export { Title };
