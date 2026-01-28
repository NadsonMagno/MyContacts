import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    strong{
        font-size: 24px;
        color: #222;
    }
    a{
        font-size: 16px;
        color: ${props => props.theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border:2px solid ${props => props.theme.colors.primary.main}    ;
        border-radius: 4px;
        padding: 8px 16px;

        &:hover{
            background-color: ${props => props.theme.colors.primary.main};
            color: #FFF;
            transition: all 0.2s ease-in;
        }

    }

`;
