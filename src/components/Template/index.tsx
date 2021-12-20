import Head from "next/head";
import React from "react";

const Template: React.FC<{ title?: string }> = ({
    children,
    title = "Food U",
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    );
};

export default Template;
