import {Container, Title} from "./style";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
/* import arrow from "../../assets/images/icons/arrow-icon.png";
 */
export default function PageHeader({ title}: { title?: string }) {
    return (
        <Container>
            <Link to="/">

{/*             <img src="arrow" alt="Home Icon" style={{ width: "20px", marginLeft: "5px" }} />
*/}
               <Title>{title}</Title>
          </Link>

        </Container>
    );
    }

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
}
