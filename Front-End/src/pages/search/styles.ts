import styled from "styled-components";

const LoadingContainer = styled.div`
	height: 46.875rem; /* 750px */

	display: flex;
	align-items: center;
	justify-content: center;

	&.adjustable {
		height: 3.75rem; /* 60px */
		margin: 0 auto;
	}

	&.center {
		margin: 0 auto;
	}

	&.h-400 {
		min-height: 25rem; /* 400px */
	}

	&.small {
		transform: scale(0.5);
	}
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

export { LoadingContainer, SearchContainer };
