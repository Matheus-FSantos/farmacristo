import styled from "styled-components";

const ProductContainer = styled.section`
	padding: 1.875rem 6rem; /* 30px and 96px */

	position: relative;

	width: 100%;
	height: auto;
	overflow-y: hidden;
	overflow-x: auto;
	
	display: flex;
	justify-content: center;
	
	-ms-overflow-style: none;
	scrollbar-width: none;
	
	gap: 3.75rem; /* 60px */

	min-height: 300px;

	&.start {
		justify-content: start;
	}

	&::-webkit-scrollbar {
  	display: none;
	}
`;

export { ProductContainer };
