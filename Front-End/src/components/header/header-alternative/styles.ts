import styled from "styled-components";


const NavContainer = styled.nav`
	position: relative;
	left: 4%;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 1.875rem; /* 30px */

		li {
			font-size: 1rem;
			font-weight: 700;
			color: var(--blue-1000);

			span {
				display: flex;
				align-items: center;
				
				gap: 10px;

				img {
					width: 10px;

					&.actived {
						rotate: calc(180deg);
					}
				}
			}

			section.actived {
				display: block;
			}
		}
	}
`;

const ResourcesDropDown = styled.section`
	min-width: 220px;
	
	display: none;

  position: absolute;
	top: 120%;
  z-index: 99;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 10px;

	overflow: hidden;

	p {
		padding: 0.625rem; /* 10px */
		color: var(--black-900);

		&:hover {
			color: var(--blue-1000);
			background-color: var(--blue-200);
		}
	}
`;

export { NavContainer, ResourcesDropDown };
