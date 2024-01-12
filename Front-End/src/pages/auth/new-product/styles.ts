import styled from "styled-components";

const TextContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 0.125rem; /* 2px */
`;

const Container = styled.section`
	padding: 2.5rem 0; /* 40px 0 */
`;

const PriceContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: start;

	gap: 0.625rem; /* 10px */
`;

const CheckBoxContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.375rem; /* 6px */

	max-width: 12.5rem; /* 200px */
	width: 100%;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		label {
			cursor: pointer;
			font-weight: 600;

			&:hover {
				filter: brightness(0.8);
			}
		}

		&:hover {
			label {
				filter: brightness(1.8);
			}

			input[type="checkbox"] {
				filter: brightness(1.8);
			}
		}
	}
`;

const PharmaciesContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 1.25rem; /* 20px */
`;

const RadioContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: start;

	gap: 0.625rem; /* 10px */

	label:hover {
		cursor: pointer;
	}

	input[type="checkbox"]:checked {
		border-color: var(--red-500);
		background-color: var(--red-500);
	}

	&:hover {
		label {
			filter: brightness(1.8);
		}
		
		input[type="checkbox"] {
			filter: brightness(1.8);
		}
	}
`;

const ButtonsContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.313rem; /* 5px */
`;

export {
	Container,
	TextContainer,
	RadioContainer,
	PriceContainer,
	ButtonsContainer,
	CheckBoxContainer,
	PharmaciesContainer,
}
