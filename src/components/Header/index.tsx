import ContactList from "../ContactList";
import Menu from "../Menu";
import * as Style from "./styles";
import { kaiseiDecol, openSans } from '../../theme/styles/font';

export default function Header() {
  return (
    <Style.Header>
      <Menu />
      <h1 style={kaiseiDecol.style}>Marcelo Lemes</h1>
      <p style={openSans.style}>
        Sou desenvolvedor de softwares e busco diminuir a distância entre tecnologia e as necessidades das pessoas.
      </p>
      <ContactList />
    </Style.Header>
  );
}
