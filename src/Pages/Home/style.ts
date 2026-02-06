import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    margin-top: 32px;
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

export const ListContainer = styled.div`
    margin-top: 24px;

    header{
        margin-bottom: 8px;
    }
    .sor-button{
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    span{
        margin-right: 8px;
        font-weight: bold;
        color: ${props => props.theme.colors.primary.main};
    }
`;

export const Card = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + & {
        margin-top: 16px;
    }

    .info{
        .contact-name{
            display: flex;
            align-items: center;

            small{
                background-color: ${props => props.theme.colors.primary.lighter};
                color: ${props => props.theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }
        span{
            display: block;
            color: ${props => props.theme.colors.gray[200]};
            font-size: 14px;
        }
    }

    .actions{
        display: flex;
        align-items: center;

        a{
            margin-right: 8px;
        }

        button{
            background: transparent;
            border: none;
            cursor: pointer;
        }
    }
`;
export const InputSearchContainer = styled.div`
    width: 100%;

    input{
        width: 100%;
        background: #FFF;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;

        &::placeholder{
            color: #bcbcbc;
        }



    }

`;
