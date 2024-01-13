import styled from "styled-components";

const Container = styled.section`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentContainer = styled.section`
	padding: 2.5rem; /* 40px */

	max-width: 450px;
	width: 100%;
	height: 600px;

	border-radius: 1rem;
	border: 1px solid var(--gray-120);

	display: flex;
	flex-direction: column;
	
	gap: 25px;

	div form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	&.signup {
		max-width: 500px;
		height: 700px;
	}
`;

const OrContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 0.313rem; /* 5px */

	margin-top: 1.875rem; /* 30px */

	span {
		font-size: 0.75rem; /* 12px */
		font-weight: 700;

		color: var(--gray-120);

		position: relative;
		bottom: 0.094rem; /* 1.5px */
	}
`;

const OrHr = styled.section`
	width: 100%;
	height: 0.125rem; /* 2px */

	background-color: var(--gray-120);

	border-radius: 0.125rem; /* 2px */
`;

const RedirectSpan = styled.span`
	color: var(--gray-700);
	font-size: 14px;
	font-weight: 600;


	a {
		color: var(--blue-1000);

		&:hover {
			text-decoration: underline;
		}
	}
`;

export {
	OrHr,
	Container,
	OrContainer,
	RedirectSpan,
	ContentContainer
}
