import Sidebar from "react-bootstrap-sidebar-menu";

import Menu1 from "@/components/menus/Menu1";
import Menu2 from "@/components/menus/Menu2";

export default function SidebarComponent() {

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
          <Menu1 />
          <Menu2 />
        </Sidebar.Body>
      </Sidebar.Collapse>
    </Sidebar>
  );
}
