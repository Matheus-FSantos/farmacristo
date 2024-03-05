import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;

	height: 58.125rem; /* 930px */
	
	@media only screen and (max-width: 510px) {
		gap: 0.313rem; /* 5px */
	}

	@media only screen and (max-width: 420px) {
		flex-direction: column;

		gap: 0;
	}
`;

const SideBarContainer = styled.div`
	display: flex;
	align-items: center;
	max-width: 25rem; /* 400px */
	width: 100%;
`;

const SideBar = styled.div`
	width: 100%;
	height: 58.125rem; /* 930px */

	background-color: var(--white-1000);

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 25%;

	padding: 5rem 0;

	position: relative;

	@media only screen and (max-width: 420px) {
		width: 100%;
		height: auto;
		padding: 1.25rem; /* 20px */

		flex-direction: row;
		gap: 1.25rem;

		justify-content: space-between;
	}
`;

const Logo = styled.img`
	width: 5rem; /* 80px */
	height: 5rem;

	position: relative;
	left: 0.625rem;

	&:hover {
		cursor: pointer;
	}

	@media only screen and (max-width: 510px) {
		width: 4rem;
		height: 4em;

		left: 0rem;
	}
`;

const SideBarHr = styled.div`
	width: 0.125rem; /* 2px */
	height: 37.5rem; /* 600px */

	background-color: var(--blue-1000);

	border-radius: 3.125rem; /* 50px */

	@media only screen and (max-width: 420px){
		display: none;
	}
`;

const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	width: 100%;

	@media only screen and (max-width: 420px) {
		width: auto;
		flex-direction: row;

		gap: 0.625rem; /* 10px */
	}
`;

const Option = styled.div`
	width: 60%;
	padding: 1.25rem; /* 20px */

	display: flex;
	align-items: center;
	justify-content: center;

	gap: 1.25rem;

	cursor: pointer;

	border-radius: 0.313rem; /* 5px */

	&:hover {
		background-color: var(--gray-70);
	}

	a {
		color: var(--blue-1000);
		font-weight: 600;

		position: relative;
		top: 0.125rem; /* 2px */
	}

	a:not([href]):not([class]), a:not([href]):not([class]):hover {
		color: var(--blue-1000); /* reset bootstrap decoration */
	}

	@media only screen and (max-width: 1255px) {
		width: 90%;
	}

	@media only screen and (max-width: 510px) {
		a {
			display: none;
		}
	}

	@media only screen and (max-width: 510px) {
		width: 2.5rem; /* 40px */
		padding: 0.625rem; /* 10px */

		i {
			transform: scale(1.05);
		}

		background-color: var(--gray-70);
	}
`;

const CopyrightSpan = styled.span`
	font-size: 0.625rem; /* 10px */
	font-weight: 600;

	width: 6.25rem; /* 100px */
	text-align: center;

	color: var(--gray-700);

	@media only screen and (max-width: 420px) {
		display: none;
	}
`;

const IFrame = styled.iframe`
`;

export {
	Logo,
	IFrame,
	Option,
	SideBar,
	Container,
	SideBarHr,
	CopyrightSpan,
	OptionsContainer,
	SideBarContainer,
}
