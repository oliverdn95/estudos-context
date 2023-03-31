
import { useContext } from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NavBar.css";

export function NavBar() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  if (temaEscuro){
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  }

  return (
    <Navbar id="navbar" bg={temaEscuro ? "dark" : "light"} variant={ temaEscuro ? "dark" : "light"} expand="lg">
      <Container fluid>
        <Navbar.Brand >App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/"  >Home</Nav.Link>
            <Nav.Link as={Link} to="/perfil" >Perfil</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            <Button onClick={alternar} variant={temaEscuro ? "outline-light" : "outline-dark"}>
            <img src={iconeBtn} width="16" /> Alternar
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
