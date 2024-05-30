import styled from "styled-components";

const ProductTrend = styled.section`
	display: flex;
	flex-direction: column;

	position: relative;
	
	gap: 20px;

	min-height: 300px;
	height: 100%;
	
	div.title {
		position: relative;
		z-index: 1;

		display: flex;
		align-items: center;
		justify-content: space-between;

		h2 {
			font-weight: 700;
		}
	}

	div.blur {
		position: absolute;
		top: 0;
		
		width: 30px;
		height: 100%;
	}

	div.toright {
		right: 0;

		background: linear-gradient(to right, transparent, white);
	}

	div.toleft {
		left: 0;

		background: linear-gradient(to left, transparent, white);		
	}
`;

const HomeContainer = styled.section`
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

		gap: 50px;

		a {
			width: 100%;
			text-align: end;
		}
	}
`;

export { HomeContainer, ProductTrend };
