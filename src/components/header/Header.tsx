import React from "react";
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
        <NavLink to="/lifestyle">LIFESTYLE</NavLink>
        <NavLink to="/photodiary">PHOTODIARY</NavLink>
        <NavLink to="/music">MUSIC</NavLink>
        <NavLink to="/travel">TRAVEL</NavLink>
      </Button>
    </HeaderStyled>
  );
}

export default Header;
