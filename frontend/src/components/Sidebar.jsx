import Sidebar from "react-bootstrap-sidebar-menu";
import RandomImage from "../img/logo192.png";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHeart, faHouse} from "@fortawesome/free-solid-svg-icons";

function SidebarComponent(props) {
  const heart = <FontAwesomeIcon icon={faHeart} color="#90EE90" />;
  const bolt  = <FontAwesomeIcon icon={faBolt} color="magenta" />;
  const house = <FontAwesomeIcon icon={faHouse} color="azure" />;
  const theme = "dark";

  return (
    <Sidebar variant={theme} bg={theme} expand="sm">
      <Sidebar.Collapse getScrollValue={500}>
        <Sidebar.Header>
          <Sidebar.Brand>
            <img
              src={RandomImage}
              alt=""
              height="24"
              className="d-inline-block align-text-top icon-next-to-word"
            ></img>
            ESG Reporting
          </Sidebar.Brand>
          <Sidebar.Toggle />
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Nav>
            <div className="sidebar-menu-head">Menu 1</div>
            <Sidebar.Nav>
              <LinkContainer to="/">
                <Sidebar.Nav.Link eventKey={2}>
                  <Sidebar.Nav.Icon>{house}</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Home</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </LinkContainer>
            </Sidebar.Nav>
            <Sidebar.Nav>
              <LinkContainer to="/somepage">
                <Sidebar.Nav.Link eventKey={3}>
                  <Sidebar.Nav.Icon>{bolt}</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Some Page</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </LinkContainer>
            </Sidebar.Nav>
          </Sidebar.Nav>
          <Sidebar.Nav>
            <div className="sidebar-menu-head">Menu 2</div>
            <Sidebar.Nav>
              <LinkContainer to="/anotherpage">
                <Sidebar.Nav.Link eventKey={4}>
                  <Sidebar.Nav.Icon>{heart}</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Another Page</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </LinkContainer>
            </Sidebar.Nav>
          </Sidebar.Nav>
        </Sidebar.Body>
      </Sidebar.Collapse>
    </Sidebar>
  );
}

export default SidebarComponent;
