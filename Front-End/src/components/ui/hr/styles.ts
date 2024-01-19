import styled from "styled-components";

const Hr = styled.section`
	width: 100%;
	height: 0.125rem; /* 2px */

	background-color: var(--blue-200);
	border-radius: 1.25rem; /* 20px */

	margin: 0.938rem 0 0.625rem 0; /* 10px and 0 */

	&.white {
		background-color: var(--white-1000);
	}

	&.vertical {
		width: 0.125rem; /* 2px */
		height: 28.125rem; /* 450px */
	}

	@media only screen and (max-width: 832px) {
		&.vertical {
			display: none;
		}
	}
`;

export { Hr };
