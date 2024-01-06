import Sidebar from "react-bootstrap-sidebar-menu";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Menu3() {

  const heart = <FontAwesomeIcon icon={faHeart} color="#90EE90" />;
  const link = <FontAwesomeIcon icon={faLink} color="#FFAC1C" />;

  return (
    <Sidebar.Nav>
      <div className="sidebar-menu-head">Menu 3</div>
      <Sidebar.Nav>
        <Link href="/fastapi/docs/" target="_blank">
          <Sidebar.Nav.Link
            eventKey='fastapi'
            as="span"
          >
            <Sidebar.Nav.Icon>{link}</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>FastAPI</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
        </Link>
      </Sidebar.Nav>
      <Sidebar.Nav>
        <Link href="/api/" target="_blank">
          <Sidebar.Nav.Link
            eventKey='djangoapi'
            as="span"
          >
            <Sidebar.Nav.Icon>{link}</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>Django API</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
        </Link>
      </Sidebar.Nav>
      <Sidebar.Nav>
        <Link href="/admin/" target="_blank">
          <Sidebar.Nav.Link
            eventKey='djangoadmin'
            as="span"
          >
            <Sidebar.Nav.Icon>{link}</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>Django Admin</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
        </Link>
      </Sidebar.Nav>
    </Sidebar.Nav>
  );
}
