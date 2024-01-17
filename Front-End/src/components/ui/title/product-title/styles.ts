import styled from "styled-components";

const ProductTitle = styled.span`
	font-size: 1rem; /* 16px */
	font-weight: 700;
	
	overflow: hidden;
  text-overflow: ellipsis;
	white-space: nowrap;

	color: var(--green-700);	

	&.xl {
		font-size: 1.25rem; /* 20px */
	}
`;

export { ProductTitle };
