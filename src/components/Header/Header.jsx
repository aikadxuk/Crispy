import {
  StyledHeader,
  Hamburguer,
  Line,
  Logo,
  Nav,
  Link,
  Button,
} from "./StyledHeader/StyledHeader";
import { useState } from "react";

function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const openMenu = () =>{
        setOpenMenu(!isOpenMenu)
    }


  return (
    <StyledHeader>
      <Hamburguer onClick={openMenu}>
        <Line isOpenMenu={isOpenMenu}></Line>
        <Line isOpenMenu={isOpenMenu}></Line>
        <Line isOpenMenu={isOpenMenu}></Line>
      </Hamburguer>
      <Logo>Crispy Kitchen</Logo>
      <Nav isOpenMenu={isOpenMenu}>
        <Link>Home</Link>
        <Link>Story</Link>
        <Link>Menu</Link>
        <Link>Our Updates</Link>
        <Link>Contact</Link>
      </Nav>
      <Button>Reservation</Button>
    </StyledHeader>
  );
}

export default Header;
