import styled from "styled-components";

const Container = styled.div`
	padding: 2.5rem; /* 40px */

	&.border {
		border: 0.063rem solid red; /* 1px */
	}

	&.iframe {
		width: 100%;
		height: 100%;

		padding: 2.5rem 0;

		@media only screen and (max-width: 1255px) {
			width: 70%;
		}

		@media only screen and (max-width: 765px) {
			width: 65%;
		}

		@media only screen and (max-width: 510px) {
			width: 80%;
		}
		
		@media only screen and (max-width: 420px) {
			width: 100%;
			height: 35.625rem; /* 570px */
			padding: 0;
		}
	}

	&.table, &.padding-top {
		padding: 2.5rem 0;
	}

	&.table {
		height: 32.5rem; /* 520px */
		overflow: auto;

		-ms-overflow-style: none;
		scrollbar-width: none;
		
		&::-webkit-scrollbar {
			display: none;
		}

		@media only screen and (max-width: 625px) {
			padding: 0;
		}

		@media only screen and (max-width: 420px) {
			height: 600px; /* 300px */
		}
	}

	&.main-content {
		@media only screen and (max-width: 420px) {
			padding: 0 1.25rem; /* 0 and 20px */
		}
	}

	&.details {
		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
	}

	&.details-texts {
		@media only screen and (max-width: 768px) {
			text-align: center;
		}
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

	&.justify-start {
		justify-content: start;
	}

	&.justify-center {
		justify-content: center;
	}

	&.justify-between {
		justify-content: space-between;
	}

	&.gap-20 {
		gap: 1.25rem; /* 20px */
	}

	&.gap-40 {
		gap: 2.5rem; /* 40px */
	}

	&.gap-10 {
		gap: 0.625rem; /* 10px */
	}

	&.w-100 {
		width: 100%;
	}

	&.h-100 {
		height: 100%;
	}

	&.h-700px {
		height: 43.75rem; /* 700px */
	}

	&.over-auto {
		overflow: auto;
	}

	&.search-container {
		@media only screen and (max-width: 625px) {
			flex-direction: column-reverse;
		}
	}
`;

export { Container }
