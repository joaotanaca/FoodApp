import styled from "styled-components";

export const Container = styled.div.attrs({
    className: "pt-20 pb-10 w-screen h-screen grid grid-rows-6 gap-5 overflow-hidden",
})`
    background-color: ${({ theme }) => theme.accentColor};
    div {
        &.row-span-1 {
            padding-left: 3rem;
            padding-right: 3rem;
        }
        &.no-container {
            padding: 0;
        }
    }
`;
