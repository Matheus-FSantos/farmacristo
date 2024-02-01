import styled from "styled-components";
import { OfficeJPG } from "../../assets/images/images";

const BannerContainer = styled.div`
	background: linear-gradient(
			to right,
			rgba(255, 255, 255, 1),
			rgba(255, 255, 255, 1),
			rgba(255, 255, 255, 1),
			rgba(255, 255, 255, 0)
		),
		url(${OfficeJPG}) no-repeat center center;
	background-size: cover;

	margin: 1.25rem 0;

	height: 25rem; /* 400px */
	border-radius: 1.25rem; /* 20px */

	display: flex;
	align-items: center;
	justify-content: center;
`;

const WorkWithUsContainer = styled.div`
	padding-bottom: 40px;
`;

export {
	BannerContainer,
	WorkWithUsContainer,
}
