import React, { useMemo } from "react";
import source from "./svg";

export type SvgPropsT = { size?: number };

type IconsT = keyof typeof source;

type IconPropsT = SvgPropsT & { name: IconsT };

const Icon: React.FC<IconPropsT> = ({ name, size = 24 }) => {
    const IconComponent = useMemo(() => source[name], [name, source]);

    return <IconComponent size={size} />;
};

export default Icon;
