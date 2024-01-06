import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export default function FormComponent() {
  const file = (
    <span className="icon-next-to-word">
      <FontAwesomeIcon icon={faFileInvoice} size="lg" />
    </span>
  );
  return (
    <div>
      <Form>
      <div className="form-title">{file} Form title</div>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}