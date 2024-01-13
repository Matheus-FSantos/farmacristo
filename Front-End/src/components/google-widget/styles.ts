import styled from "styled-components";

const GoogleWidget = styled.button`
	width: 100%;
	height: 50px;

	font-size: 16px;
	font-weight: 700;

	display: flex;
	align-items: center;
	justify-content: center;

	gap: 20px;

	color: var(--gray-700);
	background-color: transparent;

	border-radius: 5px;
	border: 1.5px solid var(--gray-120);

	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
`;

export { GoogleWidget };
