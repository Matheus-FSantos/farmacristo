import styled from "styled-components";

const CloseBtn = styled.span`
	width: 35px;
	height: 35px;

	border-radius: 35px;

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;

	top: 10px;
	right: 10px;
	
	cursor: pointer;

	&:hover {
		background-color:  var(--gray-70);		
	}
`;

export { CloseBtn };
