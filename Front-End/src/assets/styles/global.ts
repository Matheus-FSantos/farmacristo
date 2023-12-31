import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
		:root {
			--white-1000: #FFFFFF;

			--red-1000: #FF0000;
			--red-500: #C20000;
			--red-150: #FFD9D9;

			--blue-1000: #000C6E;
			--blue-900: #002EEF;
			--blue-300: #424B92;
			--blue-200: #999EC5;
			--blue-150: #D9E0FF;
			--blue-100: #D8DAE8;
			
			--green-1000: #153243;
			--green-900: #48BE00;
			--green-700: #284B63;
			--green-500: #25D366;
			--green-150: #E4F5D9;

			--pink-900: #FF00FA;
			--pink-150: #FFD9FE;

			--orange-900: #FF8500;
			--orange-150: #FFEDD9;
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
    }

    a {
        text-decoration: none;
        color: var(--text-body);

        &:hover {
            filter: brightness(0.7);
            text-decoration: underline;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export { GlobalStyles };
