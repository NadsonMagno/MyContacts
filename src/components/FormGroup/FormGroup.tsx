import { Container } from "./style";


export default function FormGroup({ children }: { children: React.ReactNode }) {
  return (
    <Container>
        {children}
    </Container>
  );
}
