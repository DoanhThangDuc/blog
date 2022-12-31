import { Link, NavLink } from "react-router-dom";
import { Logo, Button, HeaderStyled } from "./Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo>
          <img src="/images/minimo-logo.png" alt="img" />
        </Logo>
      </Link>
      <Button>
        <NavLink to="/cnbc">CNBC</NavLink>
        <NavLink to="/reuters">REUTERS</NavLink>
        <NavLink to="/cnn">CNN</NavLink>
        <NavLink to="/bloomberg">BLOOMBERG</NavLink>
      </Button>
    </HeaderStyled>
  );
}

export default Header;
