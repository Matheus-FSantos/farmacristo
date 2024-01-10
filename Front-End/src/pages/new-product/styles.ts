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
	
	margin: 30px 0;
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

export {
	Title,
	Label,
	Subtitle,
	TextArea,
	Container,
	InputFilled,
	TextContainer,
	PriceContainer,
	InputContainer,
}
