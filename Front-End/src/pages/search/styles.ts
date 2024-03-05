import styled from "styled-components";

const LoadingContainer = styled.div`
	height: 46.875rem; /* 750px */

	display: flex;
	align-items: center;
	justify-content: center;
`;

const SearchContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 40px;

	a {
		font-weight: 600;
		font-size: 0.9rem;

		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}

	div.products-grid {
		width: 100%;

		display: flex;
		flex-direction: column;
		
		align-items: center;
		justify-content: center;
	}
`;

const ProductLocationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const ModalProductImage = styled.img`
	width: 250px;
	height: 250px;
`;

const ProductInfosContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	width: 100%;

	gap: 0.625rem;
`;

const ProductBrand = styled.p`
	font-weight: 700;
	color: var(--purple-500);

	display: flex;
	align-items: center;

	gap: 0.625rem;
`;

const ProductDescription = styled.p `
	font-size: 0.75rem; /* 12px */
	font-weight: 600;
	line-height: 1rem;

	text-align: justify;

	color: var(--gray-700);
`;

const ProductPrescriptionIsRequired = styled.span`
	background-color: var(--red-150);
	color: var(--red-500);

	font-weight: 600;

	border-radius: 50px;
	border: 0.063rem solid var(--red-1000);

	padding: 5px 10px;

	font-size: 12px;
`;

const ProductPresentIn = styled.p`
	font-size: 0.75rem; /* 12px */
	font-weight: 600;
	line-height: 1rem;

	text-align: justify;

	color: var(--gray-700);

	&.pharmacy {
		color: var(--black-1000);
		position: relative;
		left: 0.625rem; /* 10px */
	}
`;

export { LoadingContainer, SearchContainer, ModalProductImage, ProductInfosContainer, ProductLocationContainer, ProductPresentIn, ProductBrand, ProductDescription, ProductPrescriptionIsRequired };
