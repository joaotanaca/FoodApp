import Button from "components/atom/Button";
import Icon from "components/atom/Icon";
import Input from "components/atom/Input";
import Text from "components/atom/Text";
import React, { useCallback, useState } from "react";

import { ContainerBottom, ContainerHeader } from "./styles";

const Sign: React.FC = () => {
    const [active, setActive] = useState<"login" | "signup">("login");
    const handleActive = useCallback(
        (value: typeof active) =>
            setActive((prev) => (prev === value ? prev : value)),
        [setActive],
    );
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
            <ContainerBottom>
                <div className="flex flex-col gap-9">
                    <Input
                        name="email"
                        placeholder="Email address"
                        type="email"
                    />
                    <Input
                        className="mt-2"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
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
