import styled from "styled-components";

const Container = styled.section`
	width: 100%;
	height: auto;

	padding: 0.938rem 0; /* 15px and 0px */
`;

const SocialMediaFlex = styled.section`
	display: flex;

	justify-content: start;
	align-items: center;
	gap: 0.625rem; /* 10px */
`;

const Icon = styled.img`
	width: 25px;
	height: auto;

	&.twitter {
		width: 22.5px;
		height: auto;
	}

	&:hover {
		transform: scale(1.2);
	}
`;

const Hr = styled.section`
	width: 100%;
	height: 0.125rem; /* 2px */

	background-color: var(--blue-200);
	border-radius: 1.25rem; /* 20px */

	margin: 0.938rem 0 0.625rem 0; /* 10px and 0 */
`;

const Main = styled.section`
	display: flex;
	align-items: center;

	justify-content: space-between;
`;

const ContactInformations = styled.section``;

const Logo = styled.img`
	width: 5rem; /* 80px */
	height: 5rem;

	position: relative;
	left: 2.5rem; /* 40px */

	&:hover {
		cursor: pointer;
	}
`;

const Informations = styled.section`
	display: flex;

	justify-content: start;
	align-items: center;

	gap: 0.313rem; /* 5px */

	span {
		color: var(--blue-1000);

		font-size: 0.875rem; /* 14px */
		font-weight: 600;
	}
`;

const OptionsContainer = styled.section`
	display: flex;
	gap: 1rem; /* 16px */
`;

const Option = styled.section`
	display: flex;

	justify-content: start;
	align-items: center;

	gap: 0.375rem; /* 6px */

	cursor: pointer;

	padding: 0.5rem 0.875rem; /* 8px and 14px */
	border-radius: 0.313rem; /* 5px */

	span {
		font-size: 14px;
		font-weight: 600;

		color: var(--blue-1000);
	}

	&:hover {
		background-color: var(--blue-100);
	}
`;

const ShoppingCartIconContainer = styled.section`
	position: relative;

	span {
		color: var(--white-1000);
		background-color: var(--red-1000);

		padding: 0.25rem 0.5rem; /* 4px and 8px */
		border-radius: 62.438rem; /* 999px */

		right: -0.625rem; /* -10px */
		bottom: -0.5rem; /* -8px */
		position: absolute;
	}
`;

export {
	Hr,
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
