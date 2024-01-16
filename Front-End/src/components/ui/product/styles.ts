import styled from "styled-components";

const Product = styled.div`
	width: 12.5rem; /* 200px */
	height: 21.875rem; /* 350px */

	display: flex;
	flex-direction: column;

	gap: 0.938rem; /* 15px */

	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

const ProductImage = styled.img`
	width: 100%;
	height: 10.938rem; /* 175px */
`;

const ProductTitle = styled.span`
	font-size: 1rem; /* 16px */
	font-weight: 700;
	
	overflow: hidden;
  text-overflow: ellipsis;
	white-space: nowrap;

	color: var(--green-700);	
`;

const PricesContainer = styled.section`
	display: flex;
	align-items: start;
	justify-content: start;

	gap: 0.5rem; /* 8px */
`;

export { PricesContainer, Product, ProductImage, ProductTitle };
