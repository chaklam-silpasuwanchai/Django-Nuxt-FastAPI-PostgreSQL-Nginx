import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

function FormComponent() {
  const file = (
    <span className="icon-next-to-word">
      <FontAwesomeIcon icon={faFileInvoice} color="#800080" size="lg" />
    </span>
  );
  return (
    <div>
      <div className="table-title mb-1 shadow-sm rounded">{file} Form title</div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter report name" />
          <Form.Text>
            We'll never share your report name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Version</Form.Label>
          <Form.Control placeholder="Enter report version" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Published?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
