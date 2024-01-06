import Sidebar from "react-bootstrap-sidebar-menu";
import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function OverviewMenu() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const heart = <FontAwesomeIcon icon={faHeart} color="#90EE90" />;

  return (
    <Sidebar.Nav>
      <div className="sidebar-menu-head">Menu 2</div>
      <Sidebar.Nav>
        <Link href="/another">
          <Sidebar.Nav.Link
            className={currentRoute === "/another" ? "active" : ""}
            eventKey={4}
            as="span"
          >
            <Sidebar.Nav.Icon>{heart}</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>Another Page</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
        </Link>
      </Sidebar.Nav>
    </Sidebar.Nav>
  );
}
