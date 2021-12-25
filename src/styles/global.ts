import { createGlobalStyle, css } from "styled-components";
import fonts from "./fonts";
import { Theme } from "./theme";

export default createGlobalStyle`
    ${fonts}

    html{
        scroll-behavior: smooth;
        font-family: 'SF-Pro';
        font-weight: 400;
    }
    ${({ theme }) => css`
        body {
            background-color: ${theme.background};
        }
    `}
    
`;
