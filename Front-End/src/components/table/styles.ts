import styled from "styled-components";

const TableHeader = styled.th`
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
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
	width: 5.313rem; /* 85px */
	height: 4.375rem; /* 70px */
`;

const NotFound = styled.div`
	width: 100%;

	border: 0.063rem solid red; /* 1px */
`;

export {
	Image,
	NotFound,
	TableData,
	TableHeader,
}
