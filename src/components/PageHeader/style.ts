
import styled   from "styled-components";

export const Container = styled.header`
    margin-bottom: 24px;
        a {
            text-decoration: none;
            span {

                color: ${props => props.theme.colors.primary};
                font-weight: bold;
            }

            img{
                margin-right: 8px;
                transform: rotate(-90deg);

            }

        }

`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333;
`;
