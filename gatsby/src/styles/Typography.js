import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
    * {
        font-family: 'Varela Round', 'sans-serif';
        /* letter-spacing: 2px; */
        font-weight: 500;
    }

    p {
        margin: 0xp;
        font-size: 20px;
    }

`;

export default Typography;
