import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import ChakyImage from "../img/example_avatar.png";
import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBell,
  faHouse,
  faGlobe,
  faSignOut,
  faSignIn,
  faUser,
  faBolt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function NavbarComponent(props) {
  const gear = <FontAwesomeIcon icon={faGear} />;
  const bell = <FontAwesomeIcon icon={faBell} />;
  const house = <FontAwesomeIcon icon={faHouse} />;
  const globe = <FontAwesomeIcon icon={faGlobe} />;
  const signout = <FontAwesomeIcon icon={faSignOut} />;
  const signin = <FontAwesomeIcon icon={faSignIn} />;
  const user = <FontAwesomeIcon icon={faUser} />;
  const bolt = <FontAwesomeIcon icon={faBolt} />;
  const heart = <FontAwesomeIcon icon={faHeart} />;

  return (
    <Navbar
      className="main-header"
      bg="light"
      data-bs-theme="light"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link eventKey={1}>{house}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/somepage">
              <Nav.Link eventKey={2}>{bolt}</Nav.Link>
            </LinkContainer>
            <NavDropdown title={heart} id="basic-nav-dropdown">
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
            <NavDropdown title={globe} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Thai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
              {bell}
              <Badge style={{ marginLeft: "5px" }} className="badge-purple">
                9
              </Badge>
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              align="end"
              title={
                <span>
                  <img
                    src={ChakyImage} // Replace 'ChakyImage' with your image variable or path
                    alt="Chaky"
                    className="rounded profile-image"
                  />
                  Chaky
                </span>
              }
              id="basic-nav-dropdown"
              drop="lg-start"
            >
              <NavDropdown.Item href="#action/3.1">
                {user} Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {gear} Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                {signin} Sign in another account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                {signout} Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
