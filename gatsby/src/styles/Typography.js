import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
    html {
        font-family: Nunito, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    }

    p, li, span {
        letter-spacing: .03em;
        line-height: 1.6em;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: Nunito, sans-serif;
        font-weight: normal;
        margin: 0;
    }

`;

export default Typography;
