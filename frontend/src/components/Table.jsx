import Table from 'react-bootstrap/Table';
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
  faHeart
} from "@fortawesome/free-solid-svg-icons";

function TableComponent() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Report Name</th>
          <th>Version</th>
          <th>Last Updated</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>SCB Sustainability Report</td>
          <td>0.1.0</td>
          <td>April 20, 2012</td>
          <td>View | Edit | Delete </td>
        </tr>
        <tr>
          <td>2</td>
          <td>SCB Sustainability Report</td>
          <td>0.1.1</td>
          <td>July 21, 2013</td>
          <td>View | Edit | Delete </td>
        </tr>
        <tr>
          <td>3</td>
          <td>SCB Sustainability Report</td>
          <td>0.1.2</td>
          <td>July 12, 2014</td>
          <td>View | Edit | Delete </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;