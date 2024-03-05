import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
		:root {
			--white-1000: #FFFFFF;

			--black-1000: #000000;
			--black-900: #212121;

			--gray-800: #474747;
			--gray-700: #595959;
			--gray-500: #8f96a3;
			--gray-200: #A1ADB4;
			--gray-120: #D9D9D9;
			--gray-100: #D8DFE7;
			--gray-80: #E6EBF3;
			--gray-70: #ECF0F5;

			--red-1000: #FF0000;
			--red-500: #C20000;
			--red-150: #FFD9D9;

			--blue-1000: #000C6E;
			--blue-900: #002EEF;
			--blue-300: #424B92;
			--blue-200: #999EC5;
			--blue-170: #D9DBE9;
			--blue-150: #D9E0FF;
			--blue-100: #D8DAE8;
			
			--green-1000: #153243;
			--green-900: #48BE00;
			--green-850: #225145;
			--green-800: #3C8067;
			--green-700: #284B63;
			--green-500: #25D366;
			--green-170: #E2ECE8;
			--green-150: #E4F5D9;

			--pink-900: #FF00FA;
			--pink-150: #FFD9FE;

			--purple-500: #5652BF;

			--orange-900: #FF8500;
			--orange-150: #FFEDD9;

			--yellow-500: #ED9C00;
		}


    * {
        box-sizing: border-box;

        padding: 0;
        margin: 0;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;    
    }

    // font-size: 16px (Desktop)
    html {
        scroll-behavior: smooth;
        
        @media only screen and (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media only screen and (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        -webkit-font-smoothing: antialiased;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    li {
        list-style: none;

				&.brightness {
					cursor: pointer;

					&:hover {
						filter: brightness(1.5);
					}
				}
    }

    a {
        text-decoration: none;
        color: var(--text-body);

        &:hover {
            filter: brightness(0.7);
            text-decoration: none;
        }

				&.disableBrightness {
					&:hover {
						filter: none;
					}
				}
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

		input[type="checkbox"], input[type="radio"] {
			-webkit-appearance: none;

			width: 14px;
			height: 14px;
			border: 2px solid var(--gray-800);
			
			background-color: transparent;
			border-radius: 2px;

			cursor: pointer;
			
			&:checked {
				border-color: var(--blue-300);
				background-color: var(--blue-300);
			}
		}

		.react-modal-overlay {
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

			z-index: 99;
	  }

    .react-modal-content {
      max-width: 550px;
			min-height: 400px;
			max-height: 600px;
      width: 100%;

      background: var(--white-1000);
      
      position: relative;

			overflow: auto;
        
      border-radius: 0.25rem;

			-ms-overflow-style: none;
			scrollbar-width: none;

			&::-webkit-scrollbar {
				display: none;
			}
		}

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;

      transition: filter 0.15s;

      &:hover {
        filter: brightness(0.8);
      }
    }
`

export { GlobalStyles };
