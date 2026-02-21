
import { Container, ButtonContainer } from "./style";
import FormGroup from "../FormGroup/FormGroup";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import PropTypes from "prop-types";
export default function ContactForm({ buttonLabel = "Save" }: { buttonLabel?: string }) {
  return (
    <Container>
      <FormGroup>
        <Input type="text" placeholder="Name" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Phone" />
      </FormGroup>

        <FormGroup>
        <Select>
            <option value="123">Intagram</option>
            <option value="123">Intagram</option>
            <option value="123">Intagram</option>
        </Select>
        </FormGroup>

        <ButtonContainer>
          <Button type="submit" disabled>{buttonLabel}</Button>
        </ButtonContainer>
    </Container>
  );
}

ContactForm.prototype = {
    buttonLabel: PropTypes.string.isRequired
}
