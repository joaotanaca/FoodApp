import styled from "styled-components";

export const ContainerHeader = styled.div.attrs({
    className:
        "bg-white w-full px-12 flex items-center justify-center relative text-center",
})`
    height: 40vh;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
    border-radius: 30px;
    p {
        border-color: ${({ theme }) => theme.accentColor};
    }
`;

export const ContainerBottom = styled.form.attrs({
    className: "mx-auto pt-16 pb-10 px-12 flex flex-col justify-between",
})`
    height: 60vh;
    a {
        color: ${({ theme }) => theme.accentColor};
    }
`;
