import styled from "styled-components";

const InputContainer = styled.section`
	display: flex;
	flex-direction: column;
	
	gap: 0.313rem; /* 5px */

	&.file {
		gap: 0.625rem; /* 10px */
	}
`;

export { InputContainer };
