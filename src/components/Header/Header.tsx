import { HeaderContainer, InputSearchContainer } from "./style";

/* import logo from '../../assets/images/logo.svg';
 */
export default function Header(){

    return(
        <HeaderContainer>
            Header
{/*             <img src={logo} alt="Logo" />
 */}
            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato..." />
            </InputSearchContainer>
        </HeaderContainer>
    )
}
