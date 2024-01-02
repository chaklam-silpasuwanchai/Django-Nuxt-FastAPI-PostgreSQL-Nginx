import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

function TableComponent() {
  const eye = (
    <span className="crud-icon">
      <FontAwesomeIcon icon={faEye} size="xs" />
    </span>
  );
  const pen = (
    <span className="crud-icon">
      <FontAwesomeIcon icon={faPen} size="xs" />
    </span>
  );
  const trash = (
    <span className="crud-icon">
      <FontAwesomeIcon icon={faTrash} size="xs" />
    </span>
  );
  const download = (
    <span className="crud-icon">
      <FontAwesomeIcon icon={faDownload} size="xs" />
    </span>
  );
  const table = (
    <span className="icon-next-to-word">
      <FontAwesomeIcon icon={faTableList} size="lg" color="green" />
    </span>
  );

  const tableData = [
    {
      id: 1,
      name: "SCB Sustainability Report",
      version: "0.1.1",
      updated: "April 20, 2012",
    },
    {
      id: 2,
      name: "SCB Sustainability Report",
      version: "0.1.2",
      updated: "May 20, 2012",
    },
    {
      id: 3,
      name: "SCB Sustainability Report",
      version: "0.1.3",
      updated: "July 20, 2012",
    },
    {
      id: 4,
      name: "SCB Sustainability Report",
      version: "0.1.4",
      updated: "August 20, 2012",
    },
    {
      id: 5,
      name: "SCB Sustainability Report",
      version: "0.1.5",
      updated: "Oct 20, 2012",
    },
  ];

  return (
    <div>
      <div className="table-title mb-1 shadow-sm rounded">
        {table} List of Reports
      </div>
      <Table striped hover className="shadow-sm my-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Report Name</th>
            <th>Version</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.version}</td>
              <td>{item.updated}</td>
              <td>
                {eye} {pen} {trash} {download}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
