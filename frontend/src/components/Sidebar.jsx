import Sidebar from "react-bootstrap-sidebar-menu";
import RandomImage from "../img/logo192.png";

function SidebarComponent(props) {
  return (
    <Sidebar variant="dark" bg="dark" expand="sm" expanded="defaultExpanded">
      <Sidebar.Collapse getScrollValue={500}>
        <Sidebar.Header>
          <Sidebar.Brand>
          <img src={RandomImage} style={{ marginRight: "10px" }} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
          ESG Reporting
          </Sidebar.Brand>
          <Sidebar.Toggle />
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Nav>
            <Sidebar.Nav.Link eventKey="menu_title">
              <Sidebar.Nav.Icon>1</Sidebar.Nav.Icon>
              <Sidebar.Nav.Title>Overview</Sidebar.Nav.Title>
            </Sidebar.Nav.Link>
            <Sidebar.Sub eventKey={0}>
              <Sidebar.Sub.Toggle>
                <Sidebar.Nav.Icon />
                <Sidebar.Nav.Title>Reports</Sidebar.Nav.Title>
              </Sidebar.Sub.Toggle>
              <Sidebar.Sub.Collapse>
                <Sidebar.Nav>
                  <Sidebar.Nav.Link eventKey="sum_menu_title">
                    <Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title><a href="/somepage">Some Page</a></Sidebar.Nav.Title>
                  </Sidebar.Nav.Link>
                </Sidebar.Nav>
              </Sidebar.Sub.Collapse>
            </Sidebar.Sub>
          </Sidebar.Nav>
        </Sidebar.Body>
      </Sidebar.Collapse>
    </Sidebar>
  );
}

export default SidebarComponent;
