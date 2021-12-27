import Button from "components/atom/Button";
import Icon from "components/atom/Icon";
import Input from "components/atom/Input";
import Text from "components/atom/Text";
import { useForm } from "react-hook-form";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { ContainerBottom, ContainerHeader } from "./styles";
import { schema } from "./validator";

interface IFormInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

const Sign: React.FC = () => {
    const [active, setActive] = useState<"login" | "signup">("login");

    const resolver = useMemo(
        () => (active === "signup" ? yupResolver(schema) : undefined),
        [active],
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver,
    });

    const handleActive = useCallback(
        (value: typeof active) =>
            setActive((prev) => (prev === value ? prev : value)),
        [setActive],
    );

    const onSubmit = (data: IFormInputs) => {
        console.log(data);
    };

    return (
        <>
            <ContainerHeader>
                <Icon name="logo" size={160} />
                <div className="absolute bottom-0 left-0 w-full px-12 grid grid-cols-2 gap-12">
                    <Text
                        weight="semibold"
                        size="lg"
                        className={
                            active === "login"
                                ? "border-b-4 cursor-pointer pb-4 transition-all duration-150"
                                : "cursor-pointer pb-4 transition-all duration-150"
                        }
                        onClick={() => handleActive("login")}
                    >
                        Login
                    </Text>
                    <Text
                        weight="semibold"
                        size="lg"
                        className={
                            active === "signup"
                                ? "border-b-4 cursor-pointer pb-4 transition-all duration-150"
                                : "cursor-pointer pb-4 transition-all duration-150"
                        }
                        onClick={() => handleActive("signup")}
                    >
                        Sign-up
                    </Text>
                </div>
            </ContainerHeader>
            <ContainerBottom onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-9">
                    <Input
                        placeholder="Email address"
                        type="email"
                        name="email"
                        error={errors?.email?.message}
                        register={register}
                    />
                    <Input
                        className="mt-2"
                        placeholder="Password"
                        type="password"
                        name="password"
                        error={errors?.password?.message}
                        register={register}
                    />
                    {active === "signup" ? (
                        <Input
                            className="mt-2"
                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            error={errors?.confirmPassword?.message}
                            register={register}
                        />
                    ) : null}
                    <a className="font-semibold">Forgot passcode?</a>
                </div>
                <Button className="justify-self-end" type="submit">
                    Login
                </Button>
            </ContainerBottom>
        </>
    );
};

export default Sign;
