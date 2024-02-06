import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;

	height: 930px;
	gap: 20px;
`;

const SideBarContainer = styled.div`
	display: flex;
	align-items: center;
	width: 400px;
`;

const SideBar = styled.div`
	width: 100%;
	height: 930px;

	background-color: var(--white-1000);

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 25%;

	padding: 5rem 0;

	position: relative;
`;

const Logo = styled.img`
	width: 5rem; /* 80px */
	height: 5rem;

	position: relative;
	left: 0.625rem;

	&:hover {
		cursor: pointer;
	}
`;

const SideBarHr = styled.div`
	width: 0.125rem; /* 2px */
	height: 37.5rem; /* 600px */

	background-color: var(--blue-1000);

	border-radius: 3.125rem; /* 50px */
`;

const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	width: 100%;
`;

const Option = styled.div`
	width: 60%;
	padding: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	gap: 20px;

	cursor: pointer;

	border-radius: 5px;

	&:hover {
		background-color: var(--gray-70);
	}

	a {
		color: var(--blue-1000);
		font-weight: 600;

		position: relative;
		top: 2px;
	}

	a:not([href]):not([class]), a:not([href]):not([class]):hover {
		color: var(--blue-1000); /* reset bootstrap decoration */
	}
`;

const CopyrightSpan = styled.span`
	font-size: 10px;
	font-weight: 600;

	width: 100px;
	text-align: center;

	color: var(--gray-700);
`;

const IFrame = styled.iframe`
	border: 1px solid red;
	width: 70%;
	height: 100%;

	padding: 40px 0;
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
