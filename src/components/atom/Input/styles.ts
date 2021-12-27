import styled from "styled-components";

export const Container = styled.div`
    label {
        color: ${({ theme }) => theme.darkGray};
        top: calc(50% + -3px);
        transform: translateY(-50%);
        z-index: -1;
        &.active {
            top: -15px;
            font-size: 18px;
        }
    }
    input {
        border-bottom-width: 1px;
    }
`;
