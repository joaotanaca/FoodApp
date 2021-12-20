import React, { useMemo } from "react";
import source from "./svg";

type IconsT = keyof typeof source;

const Icons: React.FC<{ name: IconsT }> = ({ name }) => {
    const Icon = useMemo(() => source[name], [name, source]);

    return <Icon />;
};

export default Icons;
