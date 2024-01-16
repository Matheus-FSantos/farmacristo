import styled from "styled-components";
import { SOBackgroundImageSVG } from "../../assets/images/images";

const SectionOneContainer = styled.section`
	background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${SOBackgroundImageSVG}) no-repeat center center;
	background-size: cover;

	margin: 1.25rem 0;

	height: 37.5rem; /* 600px */

	border-radius: 1.25rem; /* 20px */

	display: flex;
	align-items: center;
	justify-content: center;

	overflow-y: hidden;
`;

const Title = styled.h1`
	font-size: 3rem; /* 48px */
	font-weight: 800;

	color: var(--blue-1000);

	span {
		color: var(--red-500);
	}
`

const Subtitle = styled.p`
	width: 29.375rem; /* 470px */
	font-size: 1.125rem; /* 18px */
	font-weight: 600;

	color: var(--blue-300);

	span {
		font-weight: 700;
		text-decoration: underline;
	}
`;

const WomanImage = styled.img`
	max-width: 48.125rem; /* 770px */
	width: 100%;
	top: 4%;
	position: relative;
`;

const SectionTwoContainer = styled.section`
	padding: 5rem 0; /* 80px and 0 */

	opacity: 0;

	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	gap: 3.125rem; /* 50px */
`;

const SubtitleGreen = styled.h2`
	font-size: 1.125rem; /* 18px */
	font-weight: 600;

	color: var(--green-700);

	span {
		font-weight: 700;
		text-decoration: underline;
	}

	&.thirdSection {
		padding-bottom: 1.875rem; /* 30px */
	}
`;

const CardContainer = styled.section`
	display: flex;

	align-items: center;
	justify-content: center;

	gap: 1.875rem; /* 30px */
`;

const Card = styled.section`
	width: 11.25rem; /* 180px */
	height: 11.25rem;

	border: 0.125rem solid; /* 2px */
	border-radius: 0.625rem; /* 10px */

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: 0.938rem; /* 15px */

	img {
		width: 5rem; /* 80px */
		height: 5rem;
	}

	span {
		width: 8.75rem; /* 140px */

		text-align: center;

		font-size: 1rem; /* 16px */
		font-weight: 800;
	}

	&.red {
		color: var(--red-1000);
		background-color: var(--red-150);
		border-color: var(--red-1000);
	}

	&.blue {
		color: var(--blue-900);
		background-color: var(--blue-150);
		border-color: var(--blue-900);
	}

	&.orange {
		color: var(--orange-900);
		background-color: var(--orange-150);
		border-color: var(--orange-900);
	}

	&.green {
		color: var(--green-900);
		background-color: var(--green-150);
		border-color: var(--green-900);
	}

	&.pink {
		color: var(--pink-900);
		background-color: var(--pink-150);
		border-color: var(--pink-900);
	}
`;

const SectionThreeContainer = styled.section`
	padding: 5rem 0; /* 80px and 0 */

	opacity: 0;
`;

const ProductContainer = styled.section`
	padding: 1.875rem; /* 30px */
	
	display: flex;
	justify-content: center;
	
	//gap: 3.75rem; /* 60px */
	gap: 8%;
`;

export {
	Card,
	Title,
	Subtitle,
	WomanImage,
	CardContainer,
	SubtitleGreen,
	ProductContainer,
	SectionOneContainer,
	SectionTwoContainer,
	SectionThreeContainer,
}
