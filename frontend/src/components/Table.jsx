import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";

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

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/report/");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchData();
  }, []);

  const formatLastUpdated = (lastUpdated) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    return new Date(lastUpdated).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className="table-title mb-1 shadow-sm rounded">
        {table} List of Reports
      </div>
      <Table striped hover className="shadow-sm my-table">
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key}>{key === "id" ? "#" : key}</th>
              ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <td key={index}>
                  {key === "last_updated"
                    ? formatLastUpdated(item[key])
                    : item[key]}
                </td>
              ))}
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
