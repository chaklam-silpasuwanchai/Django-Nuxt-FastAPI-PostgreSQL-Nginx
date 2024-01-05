import Sidebar from "react-bootstrap-sidebar-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { useRouter } from "next/router";

export default function SidebarComponent(props) {

  const router = useRouter();
  const currentRoute = router.pathname;

  const heart = <FontAwesomeIcon icon={faHeart} color="#90EE90" />;
  const bolt = <FontAwesomeIcon icon={faBolt} color="magenta" />;
  const house = <FontAwesomeIcon icon={faHouse} color="azure" />;
  const theme = "dark";

  return (
    <Sidebar variant={theme} bg={theme} expand="sm">
      <Sidebar.Collapse getScrollValue={500}>
        <Sidebar.Header>
          <Sidebar.Brand>
            <img
              src="/assets/logo192.png"
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
            <Sidebar.Nav >
              <Link href={"/home"}>
                <Sidebar.Nav.Link className={currentRoute === "/home" ? "active" : ""} eventKey={2} as="span">
                  <Sidebar.Nav.Icon>{house}</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Home</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </Link>
            </Sidebar.Nav>
            <Sidebar.Nav>
              <Link href={"/some"}>
                <Sidebar.Nav.Link className={currentRoute === "/some" ? "active" : ""} eventKey={3} as="span">
                  <Sidebar.Nav.Icon>{bolt}</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Some Page</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </Link>
            </Sidebar.Nav>
          </Sidebar.Nav>
          <Sidebar.Nav>
            <div className="sidebar-menu-head">Menu 2</div>
            <Sidebar.Nav>
              <Link href="/another">
                <Sidebar.Nav.Link className={currentRoute === "/another" ? "active" : ""} eventKey={4} as="span">
                  <Sidebar.Nav.Icon>{heart}</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Another Page</Sidebar.Nav.Title>
                </Sidebar.Nav.Link>
              </Link>
            </Sidebar.Nav>
          </Sidebar.Nav>
        </Sidebar.Body>
      </Sidebar.Collapse>
    </Sidebar>
  );
}