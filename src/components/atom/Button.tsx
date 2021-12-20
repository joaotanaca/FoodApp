import { ButtonColorsProps, PropsT } from "interfaces/atoms/Button";
import React, { useMemo } from "react";
import styled, { css, useTheme } from "styled-components";

const ButtonStyle = styled.button<ButtonColorsProps>`
    ${({ colors }) => css`
        background: ${colors.accentColor};
        color: ${colors.background};
    `};
`;

const Button: React.FC<PropsT> = ({
    colors = "primary",
    className,
    children,
    ...props
}) => {
    const theme = useTheme();
    const colorsTheme = useMemo(
        () => ({
            primary: {
                accentColor: theme.accentColor,
                background: theme.white,
            },
            secondary: {
                accentColor: theme.white,
                background: theme.accentColor,
            },
        }),
        [],
    );
    return (
        <ButtonStyle
            colors={colorsTheme[colors]}
            className={`${className} p-6 rounded-3xl font-semibold text-lg`}
            {...props}
        >
            {children}
        </ButtonStyle>
    );
};

export default Button;
