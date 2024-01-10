import styled from "styled-components";

const TextContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 0.125rem; /* 2px */

	margin-top: 40px;
`;

const Title = styled.h1`
	font-size: 2.875rem; /* 46px */
	font-weight: 700;
`;

const Subtitle = styled.h2`
	font-size: 0.75rem; /* 12px */
	position: relative;
	left: 0.25rem; /* 4px */

	span {
		color: red;
	}
`;

const InputContainer = styled.section`
	display: flex;
	flex-direction: column;
	
	gap: 0.313rem; /* 5px */

	&.file {
		gap: 0.625rem; /* 10px */
	}
`;

const PriceContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: start;

	gap: 0.625rem; /* 10px */
`; 

const InputFilled = styled.input`
	width: 100%;
	height: 2.5rem; /* 40px */
	
	font-size: 1rem;

	padding: 0.25rem 0.5rem; /* 4px and 8px*/

	border-radius: 0.313rem; /* 5px */
	border: 0.063rem solid var(--gray-100); /* 1px */

	background-color: var(--gray-80);
	color: var(--gray-800);

	&::placeholder {
		font-weight: 500;
	}

	&:focus {
		background-color: var(--white-1000);
		color: var(--black-900);

		outline-color: var(--blue-900);
		outline-style: solid;
		outline-width: thin;
	}

	&.sm {
		max-width: 31.25rem; /* 500px */
		width: 100%;
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 9.375rem; /* 150px */

	resize: none;
	
	font-size: 1rem;

	padding: 0.25rem 0.5rem;

	border-radius: 0.313rem;
	border: 0.063rem solid var(--gray-100); /* 1px */

	background-color: var(--gray-80);
	color: var(--gray-800);

	&::placeholder {
		font-weight: 500;
	}

	&:focus {
		background-color: var(--white-1000);
		color: var(--black-900);

		outline-color: var(--blue-900);
		outline-style: solid;
		outline-width: thin;
	}
`;

const Label = styled.label`
	font-weight: 500;
	font-size: 1rem;

	color: var(--black-900);

	span {
		color: red;

		&.text-muted {
			font-size: 0.625rem; /* 10px */
			color: var(--gray-800);
		}
	}
`;

const InputsFlex = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.875rem; /* 30px */

	margin: 1.875rem 0;
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

const Button = styled.button`
	width: 100%;
	height: 2.5rem; /* 40px */

	background-color: transparent;
	border-radius: 0.313rem; /* 5px */
	border: 0.125rem solid; /* 2px */

	font-size: 1rem;
	font-weight: 600;
	
	&.save {
		border-color: var(--blue-900);
		color: var(--blue-900);
		
		&:hover {
			color: var(--white-1000);
			background-color: var(--blue-900);
		}
	}

	&.cancel {
		border-color: var(--red-500);
		background-color: var(--red-500);
		color: var(--white-1000);
		
		&:hover {
			filter: brightness(1.8)
		}
	}
`;

export {
	Title,
	Label,
	Button,
	Subtitle,
	TextArea,
	InputsFlex,
	InputFilled,
	TextContainer,
	RadioContainer,
	PriceContainer,
	InputContainer,
	ButtonsContainer,
	CheckBoxContainer,
	PharmaciesContainer,
}
