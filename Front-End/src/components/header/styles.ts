import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: auto;

	padding: 0.938rem 0; /* 15px and 0px */

	position: relative;

	&.open {
		height: 100vh;
		overflow: hidden;
	}
`;

const SocialMediaFlex = styled.div`
	display: flex;

	justify-content: start;
	align-items: center;
	gap: 0.625rem; /* 10px */
`;

const Icon = styled.img`
	width: 1.563rem; /* 25px */
	height: auto;

	&.twitter {
		width: 1.406rem; /* 22.5px */
		height: auto;
	}

	&:hover {
		transform: scale(1.2);
	}

	@media only screen and (max-width: 750px) {
		width: 20px;
	}
`;

const Main = styled.div`
	display: flex;
	align-items: center;

	justify-content: space-between;
`;

const Logo = styled.img`
	width: 5rem; /* 80px */
	height: 5rem;

	position: relative;
	left: 2.5rem; /* 40px */

	&:hover {
		cursor: pointer;
	}

	&.logo-alternative-header {
		position: relative;
		left: 0.625rem; /* 10px */
	}

	@media only screen and (max-width: 1024px) {
		left: -2.5rem;
	}

	@media only screen and (max-width: 520px) {
		left: 0;
	}
`;

const ContactInformations = styled.div`
	@media only screen and (max-width: 520px) {
		display: none;
	}
`;

const Informations = styled.div`
	display: flex;

	justify-content: start;
	align-items: center;

	gap: 0.313rem; /* 5px */

	span {
		color: var(--blue-1000);

		font-size: 0.875rem; /* 14px */
		font-weight: 600;
	}

	@media only screen and (max-width: 750px) {
		span {
			font-size: 10px;	
		}
	}
`;

const OptionsContainer = styled.div`
	display: flex;
	gap: 1rem; /* 16px */

	@media only screen and (max-width: 1024px) {
		transform: scale(0.9);
	}
`;

const Option = styled.div`
	display: flex;

	justify-content: start;
	align-items: center;

	gap: 0.375rem; /* 6px */

	cursor: pointer;

	padding: 0.5rem 0.875rem; /* 8px and 14px */
	border-radius: 0.313rem; /* 5px */

	span.description {
		font-size: 0.875rem; /* 14px */
		font-weight: 600;

		color: var(--blue-1000);
	}

	img {
		&.xl {
			width: 1.875rem; /* 30px */
			height: auto;
		}
	}

	&:hover {
		background-color: var(--blue-100);
	}

	@media only screen and (max-width: 1024px) {
		span.description {
			display: none;
		}
	}
`;

const ShoppingCartIconContainer = styled.div`
	position: relative;

	span {
		color: var(--white-1000);
		background-color: var(--red-1000);

		padding: 0.25rem 0.5rem; /* 4px and 8px */
		border-radius: 62.438rem; /* 999px */

		right: -0.625rem; /* -10px */
		bottom: -0.5rem; /* -8px */
		position: absolute;

		font-size: 0.875rem; /* 14px */
		font-weight: 600;
	}
`;

export {
	Icon,
	Main,
	Logo,
	Option,
	Container,
	Informations,
	SocialMediaFlex,
	OptionsContainer,
	ContactInformations,
	ShoppingCartIconContainer,
}
