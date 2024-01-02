import Sidebar from "react-bootstrap-sidebar-menu";

function SidebarComponent(props) {

    return (
  <Sidebar variant={props.theme} bg={props.theme} expand="sm">
    <Sidebar.Collapse getScrollValue={500}>
      <Sidebar.Header>
        <Sidebar.Brand>ESG Reporting</Sidebar.Brand>
        <Sidebar.Toggle />
      </Sidebar.Header>
      <Sidebar.Body>
        <Sidebar.Nav>
          <Sidebar.Nav.Link eventKey="menu_title">
            <Sidebar.Nav.Icon>1</Sidebar.Nav.Icon>
            <Sidebar.Nav.Title>Menu Title</Sidebar.Nav.Title>
          </Sidebar.Nav.Link>
          <Sidebar.Sub eventKey={0}>
            <Sidebar.Sub.Toggle>
              <Sidebar.Nav.Icon />
              <Sidebar.Nav.Title>Submenu</Sidebar.Nav.Title>
            </Sidebar.Sub.Toggle>
            <Sidebar.Sub.Collapse>
              <Sidebar.Nav>
                <Sidebar.Nav.Link eventKey="sum_menu_title">
                  <Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Sub menu item</Sidebar.Nav.Title>
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
