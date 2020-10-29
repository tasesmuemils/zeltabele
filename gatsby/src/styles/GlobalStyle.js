import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --white: hsla(60, 5%, 92%, 1);
        --black: #000;
        --shapes: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%23b7f0ad'/%3E%3Cstop offset='1' stop-color='%23d2ff96'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23edff7a'/%3E%3Cstop offset='1' stop-color='%23ffcc00'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

        /* CSS HSL */
        --first: hsla(75, 19%, 88%, 1);
        --second: hsla(90, 22%, 75%, 1);
        --third: hsla(118, 16%, 60%, 1);
        --fourth: hsla(126, 25%, 59%, 1);
        --fifth: hsla(131, 19%, 18%, 1);
        /* CSS HEX */
        /* --granny-smith-apple: #b7f0adff;
        --mindaro: #d2ff96ff;
        --mindaro-2: #edff7aff;
        --citrine: #e8d33fff;
        --ochre: #d17b0fff; */

        


        /* SCSS Gradient */
        $gradient-top: linear-gradient(0deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-right: linear-gradient(90deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-bottom: linear-gradient(180deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-left: linear-gradient(270deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-top-right: linear-gradient(45deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-bottom-right: linear-gradient(135deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-top-left: linear-gradient(225deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-bottom-left: linear-gradient(315deg, #b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
        $gradient-radial: radial-gradient(#b7f0adff, #d2ff96ff, #edff7aff, #e8d33fff, #d17b0fff);
    }
    

    html {
        background-color: var(--white);
    }


    a {
        color: var(--white);
        text-decoration: none;
        outline: none;
    }

    a:hover {
        
        text-decoration: none;
        outline: none;
    }

    path {
        fill: var(--fourth);
    }

    .wrap-container {
        position: relative;
        /* overflow: hidden; */
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
        /* padding: 5px 0px; */
    }
`;

export default GlobalStyles;
