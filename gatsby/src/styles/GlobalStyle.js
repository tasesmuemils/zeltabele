import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000;
        --pink: #ec5757;
    }

    html {
        background-color: var(--white);
    }

    a {
        color: var(--black);
        text-decoration: none;
        outline: none;
    }
`;

export default GlobalStyles;
