import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import { Theme } from "./theme";

export default createGlobalStyle`
    ${fonts}

    html{
        scroll-behavior: smooth;
        font-family: 'SF-Pro';
        font-weight: 400;
    }

    body{
        background-color:${({ theme }) => (theme as Theme).background};
    }
`;
