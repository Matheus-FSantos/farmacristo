import styled from "styled-components";

const Container = styled.section`
	padding: 2rem 6.25rem;
	opacity: 0;
`

const TextContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 2px;
`;

const Title = styled.h1`
	font-size: 46px;
	font-weight: 700;
`;

const Subtitle = styled.h2`
	font-size: 12px;
	position: relative;
	left: 4px;

	span {
		color: red;
	}
`;

const InputContainer = styled.section`
	display: flex;
	flex-direction: column;
	
	gap: 5px;

	&.file {
		gap: 10px
	}
`;

const PriceContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: start;

	gap: 10px;
`; 

const InputFilled = styled.input`
	width: 100%;
	height: 40px;
	
	font-size: 16px;

	padding: 4px 8px;

	border-radius: 5px;
	border: 1px solid var(--gray-100);

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
		max-width: 500px;
		width: 100%;
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 150px;

	resize: none;
	
	font-size: 16px;

	padding: 4px 8px;

	border-radius: 5px;
	border: 1px solid var(--gray-100);

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
	font-size: 16px;

	color: var(--black-900);

	span {
		color: red;

		&.text-muted {
			font-size: 10px;
			color: var(--gray-800);
		}
	}
`;

const InputsFlex = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;

	margin: 30px 0;
`;

const CheckBoxContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 6px;

	max-width: 200px;
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

	gap: 20px;
`;

const RadioContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: start;

	gap: 10px;

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
	gap: 5px;
`;

const Button = styled.button`
	width: 100%;
	height: 40px;

	background-color: transparent;
	border-radius: 5px;
	border: 2px solid;

	font-size: 16px;
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
	Container,
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
