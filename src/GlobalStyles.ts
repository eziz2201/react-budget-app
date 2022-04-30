import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: 0;
        background: none;
        cursor: pointer;
        outline: none;
        font-family: inherit;
    }

    ul, ol {
        list-style: none;
    }
    body {
        background-color: #1E3542;
    }
`;
