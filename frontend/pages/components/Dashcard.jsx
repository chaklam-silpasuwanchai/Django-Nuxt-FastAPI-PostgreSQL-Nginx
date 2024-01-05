import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMaskVentilator,
  faBolt,
  faArrowsSpin,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

export default function DashcardComponent() {
  const mask = (
    <FontAwesomeIcon icon={faMaskVentilator} color="green" size="3x" />
  );
  const bolt = <FontAwesomeIcon icon={faBolt} color="#ffc107" size="3x" />;
  const recycle = (
    <FontAwesomeIcon icon={faArrowsSpin} color="#dc3545" size="3x" />
  );
  const board = (
    <span className="icon-next-to-word">
      <FontAwesomeIcon icon={faDashboard} color="#dc3545" size="lg" />
    </span>
  );

  const now = 60;
  const now2 = 39;
  const now3 = 11;
  return (
    <div>
      <div className="table-title mb-1 shadow-sm rounded">{board} Stats</div>
      <Row>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <div className="card-icon">
                <span>{mask}</span>
              </div>
              <Card.Title>Carbon Emission</Card.Title>
              <Card.Subtitle className="mt-3 mb-3">
                3.75 <span className="units">metric tons</span>
              </Card.Subtitle>
              <ProgressBar now={now} label={`${now}%`} variant="success" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <div className="card-icon">
                <span>{bolt}</span>
              </div>
              <Card.Title>Clean Energy</Card.Title>
              <Card.Subtitle className="mt-3 mb-3">
                2,633 <span className="units">MW</span>
              </Card.Subtitle>
              <ProgressBar now={now2} label={`${now2}%`} variant="warning" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <div className="card-icon">
                <span>{recycle}</span>
              </div>
              <Card.Title>Recycle</Card.Title>
              <Card.Subtitle className="mt-3 mb-3">
                22 <span className="units">tons</span>
              </Card.Subtitle>
              <ProgressBar now={now3} label={`${now3}%`} variant="danger" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}