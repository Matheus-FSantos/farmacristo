import styled from "styled-components";
import { BackgroundTexture, SOBackgroundImageSVG } from "../../assets/images/images";

const SectionOneContainer = styled.section`
	background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${SOBackgroundImageSVG}) no-repeat center center;
	background-size: cover;

	margin: 1.25rem 0;

	height: 37.5rem; /* 600px */

	border-radius: 1.25rem; /* 20px */

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;

	overflow: hidden;

	div.text-container {
		position: relative;
		left: 5%;

		@media only screen and (max-width: 1000px) {
			left: 10%;
		}

		@media only screen and (max-width: 875px) {
			left: 12%;
		}

		@media only screen and (max-width: 750px) {
			left: 0;
			text-align: center;

			section.title {
				justify-content: center;
				align-items: center;
			}
		}
	}

	@media only screen and (max-width: 750px) {
		height: 400px; /* 600px */
	}
`;

const Title = styled.h1`
	font-size: 3rem; /* 48px */
	font-weight: 800;

	color: var(--blue-1000);

	span {
		color: var(--red-500);
	}

	&.center {
		text-align: center;
	}

	@media only screen and (max-width: 1310px) {
		font-size: 2.2rem; /* 40px */
	}

	@media only screen and (max-width: 545px) {
		font-size: 1.875rem; /* 30px */
	}

	@media only screen and (max-width: 465px) {
		font-size: 1.625rem; /* 26px */
	}
`;

const Subtitle = styled.p`
	width: 29.375rem; /* 470px */
	font-size: 1.125rem; /* 18px */
	font-weight: 600;

	color: var(--blue-300);

	span {
		font-weight: 700;
		text-decoration: underline;
	}

	&.center {
		text-align: center;
	}

	@media only screen and (max-width: 1310px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 545px) {
		font-size: 0.875rem; /* 14px */
		width: 300px;
	}
`;

const WomanImage = styled.img`
	width: 48.125rem; /* 770px */

	position: relative;
	left: 5%;

	@media only screen and (max-width: 1310px) {
			width: 500px;
	}

	@media only screen and (max-width: 1050px) {
		width: 450px;
	}

	@media only screen and (max-width: 1000px) {
		width: 500px;
	}

	@media only screen and (max-width: 875px) {
		width: 400px;
		left: 3%;
	}

	@media only screen and (max-width: 750px) {
		display: none;
	}
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

	@media only screen and (max-width: 1024px) {
		font-size: 1rem; /* 16px */
	}

	@media only screen and (max-width: 545px) {
		font-size: 0.875rem; /* 14px */
	}

	@media only screen and (max-width: 465px) {
		font-size: 0.75rem; /* 12px */
		text-align: center;
	}
`;

const CardContainer = styled.section`
	position: relative;

	div.scrollable {
		padding: 0 1.25rem; /* 20px */

		display: flex;

		align-items: center;
		justify-content: center;

		overflow-y: hidden;

		gap: 1.875rem; /* 30px */
	}

	@media only screen and (max-width: 1240px) {
		div.scrollable {
			gap: 0.625rem; /* 10px */
		}

		div.blur {
			position: absolute;
			top: 0;
			
			width: 1.875rem; /* 30px */
			height: 100%;
		}

		div.toright {
			right: 0;
			background: linear-gradient(to right, transparent, white);
		}

		div.toleft {
			left: 0;
			background: linear-gradient(to left, transparent, white);		
		}
	}

	@media only screen and (max-width: 800px) {
		width: 90%;
		
		div.scrollable {
			justify-content: start;
			
			-ms-overflow-style: none;
			scrollbar-width: none;

			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
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
		width: 8.438rem; /* 135px */

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

	@media only screen and (max-width: 1240px) {
		//transform: scale(0.8);
		width: 10rem; /* 160px */
		height: 10rem;
		
		img {
			width: 3.5rem; /* 56px */
			height: 3.5rem;
		} 

		span {
			font-size: 0.875rem; /* 14px */
		}
	}
`;

const SectionThreeContainer = styled.section`
	padding: 5rem 0; /* 80px and 0 */

	opacity: 0;

	div.products-grid {
		width: 100%;

		display: flex;
		flex-direction: column;
		
		align-items: center;
		justify-content: center;

		gap: 3.125rem; /* 50px */
	}
`;

const SectionFourContainer = styled.section`
	padding: 0;
	opacity: 0;

	position: relative;

	width: 100vw;
	height: 40.313rem; /* 645px */

	color: var(--white-1000);
	background: var(--green-1000) url(${ BackgroundTexture }) center center;
	background-size: cover;

	overflow: hidden;

	@media only screen and (max-width: 644px) {
		height: 46.875rem; /* 750px */
	}
`;

const Elipse = styled.div`
	border: 0;
	border-radius: 100%;

	position: absolute;

	&.xl {
		width: 15rem; /* 240px */
		height: 15rem;
	}

	&.lg {
		width: 12.5rem; /* 200px */
		height: 12.5rem;
	}

	&.sm {
		width: 3.75rem; /* 60px */
		height: 3.75rem;
	}

	&.red {
		background-color: var(--red-500);
		top: -3.75rem; /* 60px */
		right: -3.75rem;
	}

	&.green-60 {
		background-color: var(--green-850);
		
		opacity: 60%;

		top: -25%;
		left: -6%;
	}

	&.green {
		background-color: var(--green-850);

		top: 15%;
		right: -15%;
	}

	&.yellow {
		background-color: var(--yellow-500);
		opacity: 40%;

		top: -6.875rem; /* 110px */
		right: 1.875rem; /* 30px */
	}

	&.pink {
		background-color: var(--pink-900);
		opacity: 50%;

		left: -2.5rem; /* 40px */
		bottom: -2.5rem;
	}

	@media only screen and (max-width: 1310px) {
		&.green-60 {
			top: -45%;
		}
	}

	@media only screen and (max-width: 1024px){
		&.green {
			display: none;
		}
	}

	@media only screen and (max-width: 644px) {
		&.green-60 {
			left: -8%;
		}
	}

	@media only screen and (max-width: 545px) {
		&.green-60 {
			top: -40%;
			left: -5.5%;
		}
	}
`;

const JoinUsTextsContainer = styled.section`
	display: flex;
	flex-direction: column;

	gap: 3.125rem; /* 50px */

	div.title-container {
		position: relative;

		h1 {
			position: relative;
			z-index: 1;
		}
	}

	@media only screen {
		gap: 1.875rem; /* 30px */
	};

	@media only screen and (max-width: 644px) {
		width: 15.625rem; /* 250px */

		div.title-container {
			h1 {
				font-size: 1.75rem;
				white-space: nowrap;
			}
		}
	}
`;

const JoinUsDescription = styled.p`
	width: 27.5rem; /* 440px */
	text-align: justify;
	
	font-size: 1.25rem; /* 20px */

	span {
		font-weight: 700;
		text-decoration: underline;
	}

	@media only screen and (max-width: 1240px) {
		font-size: 1rem;
		width: 21.875rem; /* 350px */
	}

	@media only screen and (max-width: 832px) {
		font-size: 0.875rem; /* 14px */
		width: 15.625rem; /* 250px */
	}

	@media only screen and (max-width: 644px) {
		display: none;
	}
`;

const SectionFourContainerFlex = styled.section`
	height: 40.313rem; /* 645px */

	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: center;

	gap: 6.25rem; /* 100px */

	div.sign-up-container {
		position: relative;
	}

	@media only screen and (max-width: 1240px) {
		gap: 5rem; /* 80px */
	}

	@media only screen and (max-width: 1024px) {
		gap: 2.5rem; /* 40px */	
	}

	@media only screen and (max-width: 700px) {
		gap: 1.875rem; /* 30px */
	}

	@media only screen and (max-width: 644px) {
		height: 46.875rem; /* 750px */

		flex-direction: column;
		gap: 3.125rem; /* 50px */
	}
`;

const SignUpContainer = styled.section`
	width: 28.5rem; /* 456px */
	height: 32.125rem; /* 514px */

	border: 0;
	border-radius: 1.25rem; /* 20px */
	background-color: var(--white-1000);

	display: flex;
	flex-direction: column;

	position: relative;
	z-index: 1;

	justify-content: space-evenly;

	padding: 0 2.5rem; /* 0 40px */

	form {
		height: 68%;

		display: flex;
		flex-direction: column;

		gap: 3.125rem; /* 50px */
	}

	@media only screen and (max-width: 832px) {
		padding: 0 1.875rem; /* 0 30px */
		height: 35rem; /* 560px */
	}

	@media only screen and (max-width: 700px) {
		height: 32rem; /* 512px */
	}

	@media only screen and (max-width: 400px) {
		width: 25rem;
	}
`;

export {
	Card,
	Title,
	Elipse,
	Subtitle,
	WomanImage,
	CardContainer,
	SubtitleGreen,
	SignUpContainer,
	JoinUsDescription,
	SectionOneContainer,
	SectionTwoContainer,
	SectionFourContainer,
	JoinUsTextsContainer,
	SectionThreeContainer,
	SectionFourContainerFlex,
}
