import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --white: rgb(236, 236, 234);
        --black: #000000;
        --white-2: #F3EFE6;
        --shapes: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23b7f0ad'/%3E%3Cstop offset='1' stop-color='%23d2ff96'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23edff7a'/%3E%3Cstop offset='1' stop-color='%23ffcc00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    
        --color-1: rgba(156, 124, 56, 1);
        --color-2: rgba(156, 149, 56, 1);
        --color-3: rgba(138, 156, 56, 1);
        --color-4: rgba(113, 156, 56, 1);
        --color-5: rgba(88, 156, 56, 1);
        --color-6: rgba(63, 156, 56, 1);
        --color-headings: #7e611e;
        --color-text: #60605B;
        --color-text-bg: rgb(236, 236, 234);
    }
    
    a {
        color: var(--logo);
        text-decoration: none;
        outline: none;
    }

    a:hover {
        
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
    }

    p {
        font-size: 18px;
        letter-spacing: .03em;
        line-height: 1.6em;
        color: var(--color-text);
    }

    li {
        font-size: 18px;
        letter-spacing: .03em;
        line-height: 1.6em;
    }

    h2, h3, h4 {
        color: var(--color-headings);
    }

    h3 {
        font-size: 23px;
        letter-spacing: .03em;
        line-height: 1.3em;
    }
`;

export default GlobalStyles;
