import styled from "styled-components";

const ProductGridContainer = styled.section`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(5, 1fr);

	gap: 5rem 0;

	place-items: center;

	min-height: 300px;
	height: 100%;

	&.padding-20 {
		padding: 20px 0 40px 0;
	}

	@media (max-width: 1445px) {
    grid-template-columns: repeat(4, 1fr);
  }

	@media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`;

export { ProductGridContainer };
