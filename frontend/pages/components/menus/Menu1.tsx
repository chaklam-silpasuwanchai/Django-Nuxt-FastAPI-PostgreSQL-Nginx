import Sidebar from "react-bootstrap-sidebar-menu";
import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function OverviewMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const bolt = <FontAwesomeIcon icon={faBolt} color="magenta" />;
  const house = <FontAwesomeIcon icon={faHouse} color="azure" />;

  return (
    <Sidebar.Nav>
      <div className="sidebar-menu-head">Menu 1</div>
      <Sidebar.Nav>
        <Link href={"/home"}>
          <Sidebar.Nav.Link
            className={currentRoute === "/home" ? "active" : ""}
            eventKey={2}
            as="span"
          >
            <Sidebar.Nav.Icon>{house}</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>Home</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
        </Link>
      </Sidebar.Nav>
      <Sidebar.Nav>
        <Link href={"/some"}>
          <Sidebar.Nav.Link
            className={currentRoute === "/some" ? "active" : ""}
            eventKey={3}
            as="span"
          >
            <Sidebar.Nav.Icon>{bolt}</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>Some Page</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
        </Link>
      </Sidebar.Nav>
    </Sidebar.Nav>
  );
}
