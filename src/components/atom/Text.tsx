import {
    colors,
    Colors,
    fontSize,
    FontSize,
    FontWeight,
    fontWeight,
} from "constants/Text";
import React, { useMemo } from "react";
import styled from "styled-components";

const TextComponent = styled.p<{ colorText: string }>`
    color: ${({ colorText }) => colorText};
`;

const Text: React.FC<{
    weight?: FontWeight;
    size?: FontSize;
    color?: Colors;
    className?: string;
    onClick?: (
        event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    ) => void;
}> = ({
    children,
    weight = "normal",
    size = "base",
    color = "black",
    className = "",
    onClick,
}) => {
    const classNameText = useMemo(
        () => `${className} ${fontWeight[weight]} ${fontSize[size]}`,
        [weight, size, className],
    );

    const colorSelected = useMemo(() => colors[color], [color]);
    return (
        <TextComponent
            colorText={colorSelected}
            onClick={onClick}
            className={classNameText}
        >
            {children}
        </TextComponent>
    );
};

export default Text;
