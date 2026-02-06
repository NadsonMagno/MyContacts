import { Container, InputSearchContainer, Header,  ListContainer, Card } from "./style";

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
      <a href="/">Adicionar novo contato</a>
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
            <a href="/">
{/*                 <img src={edit} alt="Edit" />
 */}        </a>
            <button type="button">
{/*                 <img src={trash} alt="Trash" />
 */}        </button>

        </div>

    </Card>


  </Container>
);
}
