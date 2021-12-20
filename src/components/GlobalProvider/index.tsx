import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";

const GlobalProvider: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalProvider;
