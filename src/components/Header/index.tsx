import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/"></NavLink>
        <NavLink title="contato" path="/contato" includes></NavLink>

      </ul>
    </Container>
  );
}
