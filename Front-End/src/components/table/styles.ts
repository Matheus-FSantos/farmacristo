import styled from "styled-components";

const TableHeader = styled.th`
	text-align: center;
	vertical-align: middle;
`;

const TableData = styled.td`
	overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px; // Define a largura máxima do texto
	
	text-align: center;
	vertical-align: middle;

	&.id {
		font-weight: bold;
	}
`;

const Image = styled.img`
	width: 85px;
	height: 70px;
`;

export {
	Image,
	TableData,
	TableHeader,
}
