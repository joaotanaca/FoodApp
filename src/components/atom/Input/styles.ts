import styled from "styled-components";

export const Container = styled.div`
    label {
        color: ${({ theme }) => theme.darkGray};
        top: calc(50% + -3px);
        transform: translateY(-50%);
        &.active {
            top: -13px;
            font-size: 18px;
        }
    }
    input {
        border-bottom-width: 1px;
    }
`;
