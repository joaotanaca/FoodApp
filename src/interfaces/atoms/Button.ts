import { HTMLAttributes } from "react";

export type ButtonColorsProps = {
    colors: { accentColor: string; background: string };
};

export type PropsT = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
    colors?: "primary" | "secondary";
    href?: string;
};
