import { ButtonColorsProps, PropsT } from "interfaces/atoms/Button";
import Link from "next/link";
import React, { useMemo } from "react";
import styled, { css, useTheme } from "styled-components";

const ButtonStyle = styled.button<ButtonColorsProps>`
    ${({ colors }) => css`
        background: ${colors.accentColor};
        color: ${colors.background};
    `};
`;

const ButtonLinkStyle = styled.a<ButtonColorsProps>`
    div {
        ${({ colors }) => css`
            background: ${colors.accentColor};
            color: ${colors.background};
        `};
    }
`;

const Button: React.FC<PropsT> = ({
    colors = "primary",
    className,
    href,
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
    return !!href ? (
        <Link href={href}>
            <ButtonLinkStyle className="text-center cursor-pointer" colors={colorsTheme[colors]} {...props}>
                <div
                    className={`${className} p-6 rounded-3xl font-semibold text-lg`}
                >
                    {children}
                </div>
            </ButtonLinkStyle>
        </Link>
    ) : (
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
