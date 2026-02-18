import styled from "styled-components";

export default styled.select`
    width: 100%;
    background: #FFF;
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 0.04);
    border: none;
    border: 2px solid #fff;
    border-radius: 4px;
    height: 52px;
    padding: 0 16px;
    outline:   none;
    font-size: 16px;
    transition: border-color 0.2s ease-in;

    &:focus {
        border-color:  ${props => props.theme.colors.primary.main};
    }

`;
