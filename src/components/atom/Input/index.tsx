import React, { useCallback, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { Container } from "./styles";

type PropsT = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    register: UseFormRegister<FieldValues>;
};

const Input: React.FC<PropsT> = ({
    className,
    placeholder,
    error,
    register,
    name,
    ...props
}) => {
    const [active, setActive] = useState(false);

    const { onBlur, onChange, ...registerProps } = register(name || "");

    const handleOnBlur = useCallback(
        (event: React.FocusEvent<HTMLInputElement, Element>) => {
            const { value } = event.currentTarget;
            if (value && !active) {
                setActive(true);
            } else if (!value) {
                setActive(false);
            }
            onBlur && onBlur(event);
        },
        [],
    );

    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.currentTarget;
            if (value && !active) {
                setActive(true);
            } else if (!value) {
                setActive(false);
            }
            onChange && onChange(event);
        },
        [],
    );

    return (
        <div>
            <Container className={`${className} relative`}>
                <label
                    className={
                        active
                            ? "active absolute transition-all text-base"
                            : "absolute transition-all text-base"
                    }
                    htmlFor={name}
                >
                    {placeholder}
                </label>
                <input
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    className="w-full border-black bg-transparent placeholder-black outline-none font-semibold pb-2"
                    {...props}
                    {...registerProps}
                />
            </Container>
            {error && <span>{error}</span>}
        </div>
    );
};

export default Input;
