import styled from "styled-components";

const ProductButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	
	gap: 0.375rem; /* 6px */

	width: 100%;
	height: 2.188rem; /* 35px */

	border: 0.094rem solid; /* 1.5px */
	border-radius: 0.313rem; /* 5px */

	svg {
		&.whatsapp-icon {
			width: 1.25rem; /* 20px */
		}
	}
	
	span {
		font-size: 0.75rem; /* 12px */
		font-weight: 700;
	}

	&:hover {
		filter: brightness(80%)
	}

	&.whatsapp {
		border-color: var(--green-800);
		background-color: var(--green-170);
		
		span {
			color: var(--green-800);
		}
	}

	&.shopping-cart {
		border-color: var(--blue-1000);
		background-color: var(--blue-170);

		span {
			color: var(--blue-1000);
		}
	}

	&.remove {
		border-color: var(--red-500);
		background-color: var(--red-150);

		span {
			color: var(--red-500);
		}
	}
`;

const ProductIcon = styled.img`
	width: 1.25rem; /* 20px */
`;

export { ProductButton, ProductIcon };
