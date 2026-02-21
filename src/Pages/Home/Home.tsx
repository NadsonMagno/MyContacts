import { Container, InputSearchContainer, Header,  ListContainer, Card } from "./style";
import { Link } from "react-router-dom";

/* import arrow from '../../assets/images/icons/arrow.svg';
 */
export default function Home() {
  return (
  <Container>
    {/*             <img src={logo} alt="Logo" />
 */}
            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato..." />
            </InputSearchContainer>
    <Header>
      <strong>3 contatos</strong>
      <Link to="/new">Adicionar novo contato</Link>
    </Header>

    <ListContainer>
        <header>
            <button type="button" className="sor-button">
                <span>Nome</span>
{/*                 <img src={arrow} alt="Arrow icon" />
 */}            </button>
        </header>


    </ListContainer>

    <Card>
        <div className="info">
            <div className="contact-name">
                <strong>Bruno Silva</strong>
                <small>instagram</small>
            </div>
        <span>buno@gmail.com</span>
        <span>(11) 99999-9999</span>

        </div>

        <div className="actions">
            <Link to="/edit/1">
{/*                 <img src={edit} alt="Edit" />
 */}        </Link>
            <button type="button">
{/*                 <img src={trash} alt="Trash" />
 */}        </button>

        </div>

    </Card>


  </Container>
);
}
