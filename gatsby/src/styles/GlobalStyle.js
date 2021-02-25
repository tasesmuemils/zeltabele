import { createGlobalStyle } from "styled-components";
import { device } from "../components/mediaQueries";
const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;
    
        --color-1: rgba(156, 124, 56, 1);
        --color-2: rgba(156, 149, 56, 1);
        --color-3: rgba(138, 156, 56, 1);
        --color-4: #719c38;
        --color-5: #589c38;
        --color-6: rgb(63, 156, 56);
        --color-headings: rgba(126, 97, 30, 1);
        --color-text: #60605B;
        --color-grey-background: #f8f8f8;      
    }

    html {
        background-color: var(--white);
    }
    
    a {
        color: var(--color-1);
        text-decoration: none;
        outline: none;
    }

    a:hover {
        color: var(--color-1);
        text-decoration: none;
        outline: none;
    }

    .wrap-container {
        position: relative;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }

    .Main-content {
        box-sizing: border-box;
        padding: 0px 120px;

        @media ${device.laptopL} {
            padding: 0 70px;
        }

        @media ${device.laptop} {
            padding: 0 50px;
        }

        @media ${device.tablet} {
            padding: 0 30px;
        }

        @media ${device.mobileL} {
            padding: 0 20px;
        }
    }

    li {
        font-size: 18px;
        letter-spacing: .03em;
        line-height: 1.6em;
    }

    h2, h3, h4, h5, h6 {
        color: var(--color-headings);
    }

    h3 {
        font-size: 23px;
        letter-spacing: .03em;
        line-height: 1.3em;
    }
`;

export default GlobalStyles;
