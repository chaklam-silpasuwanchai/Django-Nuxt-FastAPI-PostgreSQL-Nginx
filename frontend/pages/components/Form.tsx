import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export default function FormComponent() {
  const file = (
    <span className="icon-next-to-word">
      <FontAwesomeIcon
        icon={faFileInvoice}
        size="lg"
      />
    </span>
  );
  return (
    <div>
      <Form>
        <div className="form-title">{file} Enter Report Description</div>

        <InputGroup>
          <InputGroup.Text id="basic-addon1">{file}</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter report name"
            aria-label="Enter reporrrttt"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup>
          <InputGroup.Text id="basic-addon2">{file}</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter report name"
            aria-label="Enter report name"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
