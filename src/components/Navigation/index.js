import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">VAULTERY</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* <- додаємо mx-auto для центрування */}
            <Nav.Link href="#home">Рекомендації</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <NavDropdown title="Збори та Звіти" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Для 152-ї | На деталі та ремонт VW T4</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Для 152-ї | На інструменти</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation;