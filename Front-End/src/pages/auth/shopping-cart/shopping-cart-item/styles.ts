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

		gap: 8px;
	}
`;

const ProductDescription = styled.span `
	width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
	
	text-align: justify;
	font-size: 12px;
	font-weight: 600;

	color: var(--gray-700);
`;

export {
	Icon,
	IconAndInfos,
	InfosContainer,
	ProductDescription,
	ShoppingCartItemContainer,
}
