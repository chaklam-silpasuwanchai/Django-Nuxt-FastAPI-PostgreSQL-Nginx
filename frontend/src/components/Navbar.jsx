import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import ChakyImage from "../img/example_avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBell,
  faHouse,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function NavbarComponent(props) {
  const gear = <FontAwesomeIcon icon={faGear} />;
  const bell = <FontAwesomeIcon icon={faBell} />;
  const house = <FontAwesomeIcon icon={faHouse} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;

  return (
    <Navbar
      className="main-header"
      expand="lg"
      bg={props.theme}
      variant={props.theme}
      sticky="top"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#aaa" }}>
              {house}
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-2">
            <Nav.Link href="#link">{globe}</Nav.Link>
            <Nav.Link href="#link">{bell}</Nav.Link>
            <Nav.Link href="#link">{gear}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              align="end"
              title={
                <span>
                  <img
                    src={ChakyImage} // Replace 'ChakyImage' with your image variable or path
                    alt="Chaky"
                    style={{ width: "18px", marginRight: "10px" }} // Adjust the width and margin as needed
                    className="rounded"
                  />
                  Chaky
                </span>
              }
              style={{ color: "#ddd" }}
              id="basic-nav-dropdown"
              menuVariant="dark"
              className="profile"
              drop="lg-start"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
