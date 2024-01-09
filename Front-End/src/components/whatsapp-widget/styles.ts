import styled from "styled-components";

const Container = styled.a`
	width: 4.375rem; /* 70px */
	height: 4.375rem; /* 70px */

	border-radius: 62.438rem; /* 999px */

	background-color: var(--green-500);

	position: fixed;
	right: 3.125rem; /* 50px */
	bottom: 3.125rem;

	cursor: pointer;
	
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		transform: scale(1.1);
		filter: brightness(1);
	}

	img {
		bottom: 0.063rem; /* 1px */
		left: 0.031rem; /* 0.5px */
		position: relative;	
	}
`;

export { Container };
