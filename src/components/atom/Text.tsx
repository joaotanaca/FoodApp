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

const Text: React.FC<{ weight?: FontWeight; size?: FontSize; color?: Colors }> =
    ({ children, weight = "normal", size = "base", color = "black" }) => {
        const className = useMemo(
            () => `${fontWeight[weight]} ${fontSize[size]}`,
            [weight, size],
        );

        const colorSelected = useMemo(() => colors[color], [color]);
        return (
            <TextComponent colorText={colorSelected} className={className}>
                {children}
            </TextComponent>
        );
    };

export default Text;
