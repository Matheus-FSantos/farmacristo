import styled from "styled-components";

const ShoppingCartItemContainer = styled.section`
	width: 100%;
	height: 11.25rem; /* 180px */

	display: flex;

	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	div.buttons {
		max-width: 18.75rem; /* 300px */
		width: 100%;
	}

	&:hover {
		transform: scale(1.01);
	}

	@media only screen and (max-width: 612px) {
		height: auto;

		gap: 1.25rem; /* 20px */
		flex-direction: column;
		
		div.buttons {
			max-width: 100%;
		}
	}
`;

const IconAndInfos = styled.section`
	display: flex;
	
	gap: 10%;
	align-items: center;

	height: 100%;

	@media only screen and (max-width: 612px) {
		gap: 2%;
	}
`;

const Icon = styled.img`
	width: 10rem; /* 160px */
	height: 10rem;
`;

const InfosContainer = styled.section`
	display: flex;
	flex-direction: column;

	align-items: start;
	justify-content: center;

	gap: 1.125rem; /* 18px */
	width: 31.25rem; /* 500px */
	height: 100%;

	div {
		display: flex;
		flex-direction: column;
		width: 100%;

		gap: 0.5rem; /* 8px */
	}

	@media only screen and (max-width: 612px) {
		gap: 0.75rem; /* 12px */
		width: 12.5rem; /* 200px */

		div {
			gap: 0.25rem; /* 4px */
		}
	}
`;

const ProductDescription = styled.span `
	width: 500px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
	
	text-align: justify;
	font-size: 12px;
	font-weight: 600;

	color: var(--gray-700);

	@media only screen and (max-width: 1230px) {
		width: 350px;
	}

	@media only screen and (max-width: 1010px) {
		width: 300px;
	}

	@media only screen and (max-width: 612px) {
		width: 100%;
  	-webkit-line-clamp: 1;
	}
`;

export {
	Icon,
	IconAndInfos,
	InfosContainer,
	ProductDescription,
	ShoppingCartItemContainer,
}
