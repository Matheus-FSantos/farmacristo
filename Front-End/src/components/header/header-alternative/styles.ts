import styled from "styled-components";

const NavContainer = styled.nav`
	position: relative;
	left: 4%;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		&.column {
			flex-direction: column;
		}

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
		}
	}

	@media only screen and (max-width: 612px) {
		display: none;
	}
`;

const ResponsiveNavContainer = styled.div`
	display: none;

	div {
		position: relative;

		&#first, &#second, &#third {
			width: 1.25rem; /* 20rem */
			height: 0.188rem; /* 3px */
			background-color: var(--blue-1000);

			z-index: 98;
		}
		
		&#second {
			width: 1.5rem;
		}
	}

	@media only screen and (max-width: 612px) {
		display: flex;
		flex-direction: column;
		gap: 0.3rem; /* 4px */

		&.clicked {
			div {
				&#first {
					width: 1.5rem; /* 24px */
					transform: rotate(45deg);
				}

				&#second {
					transform: rotate(-45deg) translateY(-5px) translateX(5px);
				}

				&#third {
					display: none;
				}
			}
		}
	}
`;

const MobileNavBar = styled.div`
	display: none;

	&.actived {
		display: block;

		position: absolute;
		top: 43%;
		left: 38%;

		transform: scale(1.3);
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		&.column {
			flex-direction: column;
		}

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

const ResourcesDropDown = styled.div`
	min-width: 13.75rem; /* 220px */
	
	display: none;

  position: absolute;
	top: 120%;
  z-index: 99;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 0.625rem; /* 10px */

	overflow: hidden;

	p {
		padding: 0.625rem; /* 10px */
		color: var(--black-900);

		&:hover {
			color: var(--blue-1000);
			background-color: var(--blue-200);
		}
	}

	&#dropdown.actived {
		display: block;
	}

	@media only screen and (max-width: 612px) {
		left: -65%;
		top: 110%;
		text-align: center;
	}
`;

export { NavContainer, ResponsiveNavContainer, MobileNavBar, ResourcesDropDown };
