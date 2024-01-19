import styled from "styled-components";

const ProductGridContainer = styled.section`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 5rem 0;

	place-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export { ProductGridContainer };
