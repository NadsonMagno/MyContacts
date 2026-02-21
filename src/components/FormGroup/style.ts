import styled from "styled-components";

export const Container = styled.form`
    & + & {
        margin-top: 16px;
    }
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
