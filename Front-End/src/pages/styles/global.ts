import styled from "styled-components";

const GlobalContainer = styled.section`
	min-height: 100vh;
	
	padding: 0 6.25rem; /* 0 and 100px */
	overflow: auto;

	@media only screen and (max-width: 1200px) {
		&.products-grid {
			padding: 0;	
		}
	}

	@media only screen and (max-width: 1000px) {
		padding: 0 2.5rem; /* 0 and 40px */
	}

	@media only screen and (max-width: 465px) {
		padding: 0 1.25rem; /* 0 and 20px */
	}
`;

export { GlobalContainer };
