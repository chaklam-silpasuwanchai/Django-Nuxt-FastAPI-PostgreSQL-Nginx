import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);  //for good user experience; it's optional
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}report/`);

        // Axios automatically throws an error for non-2xx responses
        const result = response.data;
        setData(result);
        setIsLoading(false);  //try to set this as true to see the effect of loading
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  if (isLoading){
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

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
          {data.map((item) => (
            <tr key={item.id}>
              {Object.keys(item).map((key) => (
                <td key={key}>
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
