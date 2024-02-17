import styled from "styled-components";

const Container = styled.div`
	padding: 2.5rem; /* 40px */

	&.table, &.padding-top {
		padding: 2.5rem 0;
	}

	&.no-padding {
		padding: 0;
	}

	&.flex {
		display: flex;
	}

	&.column {
		flex-direction: column;
	}

	&.row-reverse {
		flex-direction: row-reverse;
	}

	&.center {
		align-items: center;
	}

	&.start {
		align-items: start;	
	}

	&.end {
		align-items: end;
	}

	&.justify-center {
		justify-content: center;
	}

	&.justify-between {
		justify-content: space-between;
	}

	&.gap-20 {
		gap: 20px;
	}

	&.gap-40 {
		gap: 40px;
	}

	&.gap-10 {
		gap: 10px;
	}

	&.w-100 {
		width: 100%;
	}

	&.h-100 {
		height: 100%;
	}

	&.h-700px {
		height: 700px;
	}

	&.over-auto {
		overflow: auto;
	}
`;

export { Container }
