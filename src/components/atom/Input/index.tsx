import React, { HTMLAttributes, useCallback, useState } from "react";

import { Container } from "./styles";

type PropsT = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<PropsT> = ({ className, placeholder, ...props }) => {
    const [active, setActive] = useState(false);
    const handleOnBlurOnFocus = useCallback(
        (event: React.FocusEvent<HTMLInputElement, Element>) => {
            const { value } = event.currentTarget;
            if (value && !active) {
                setActive(true);
            } else if (!value) {
                setActive(false);
            }
        },
        [],
    );
    return (
        <Container className={`${className} relative`}>
            <label
                className={
                    active
                        ? "active absolute transition-all text-base"
                        : "absolute transition-all text-base"
                }
                htmlFor={props.name}
            >
                {placeholder}
            </label>
            <input
                {...props}
                onChange={handleOnBlurOnFocus}
                onBlur={handleOnBlurOnFocus}
                className="w-full border-black bg-transparent placeholder-black outline-none font-semibold pb-2"
            />
        </Container>
    );
};

export default Input;
