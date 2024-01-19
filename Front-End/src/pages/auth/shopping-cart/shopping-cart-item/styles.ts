import styled from "styled-components";

const ShoppingCartItemContainer = styled.section`
	width: 100%;
	height: 180px;

	display: flex;

	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	div.buttons {
		max-width: 300px;
		width: 100%;
	}

	&:hover {
		transform: scale(1.01);
	}
`;

const IconAndInfos = styled.section`
	display: flex;
	gap: 10%;

	height: 100%;
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

	gap: 18px; /* 5px */
	width: 500px; /* 500px */
	height: 100%;

	div {
		display: flex;
		flex-direction: column;
		width: 100%;

		gap: 8px;
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
`;

export {
	Icon,
	IconAndInfos,
	InfosContainer,
	ProductDescription,
	ShoppingCartItemContainer,
}
