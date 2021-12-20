import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export default createGlobalStyle`
    html{
        scroll-behavior: smooth;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }
    body{
        background-color:${({ theme }) => (theme as Theme).background};
    }
`;
