import theme from "styles/theme";

export type FontWeight = keyof typeof fontWeight;

export type FontSize = keyof typeof fontSize;

export type Colors = keyof typeof colors;

export const colors = {
    primary: theme.accentColor,
    white: "#FFFFFF",
    black: theme.black,
};

export const fontWeight = {
    light: "font-light",
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
};

export const fontSize = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
};
