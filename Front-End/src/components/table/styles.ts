import styled from "styled-components";

const TableHeader = styled.th`
	text-align: center;
	vertical-align: middle;
`;

const TableData = styled.td`
	overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 9.375rem; /* 150px */
	
	text-align: center;
	vertical-align: middle;

	&.id {
		font-weight: bold;
	}

	&.not-found {
		color: var(--gray-500);
		padding: 2.5rem 0; /* 40px */
	}
`;

const Image = styled.img`
	width: 85px;
	height: 70px;
`;

const NotFound = styled.div`
	width: 100%;

	border: 1px solid red;
`;

export {
	Image,
	NotFound,
	TableData,
	TableHeader,
}
