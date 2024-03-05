import styled from "styled-components";

const NewModalBtn = styled.button`
	height: 100%;
	
	span {
		font-weight: 600;
		white-space: nowrap;
	}

	@media only screen and (max-width: 625px) {
		width: 100%;
	}
`;

export { NewModalBtn };
