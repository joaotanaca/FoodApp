import React from "react";
import { SvgPropsT } from "..";

const arrowLeft: React.FC<SvgPropsT> = ({ size = 0 }) => {
    return (
        <svg
            width={size * 0.57}
            height={size}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 13L1 7L7 1"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default arrowLeft;
