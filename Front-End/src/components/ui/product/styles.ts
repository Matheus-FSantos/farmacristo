import styled from "styled-components";

const ProductContainer = styled.div`
	width: 15.625rem; /* 250px */
	height: 25rem; /* 400px */

	display: flex;
	flex-direction: column;

	justify-content: space-between;

	position: relative;

	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

const ProductPressableArea = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 0.625rem; /* 10px */
`;

const ProductImage = styled.img`
	width: 100%;
	height: 13.438rem; /* 215px */
`;

const ProductTitle = styled.span`
	font-size: 1rem; /* 16px */
	font-weight: 700;

	color: var(--green-700);	

	&.xl {
		font-size: 1.5rem; /* 16px */
	}

	&.overflow-hidden {
		max-height: calc(2 * 1.2rem); /* 1.2em é aproximadamente a altura de uma linha de texto */
	
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const PricesContainer = styled.section`
	display: flex;
	align-items: start;
	justify-content: start;

	gap: 0.5rem; /* 8px */
`;

const PromotionContainer = styled.span`
	width: 6.25rem; /* 100px  */
	height: 1.875rem; /* 30px */

	position: absolute;
	left: -3.125rem; /* 50px */

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 999px;

	background-color: var(--red-1000);
	color: var(--white-1000);

	font-weight: 600;
	font-size: 1rem; /* 14px */
`;

export { PricesContainer, PromotionContainer, ProductContainer, ProductImage, ProductTitle, ProductPressableArea };
