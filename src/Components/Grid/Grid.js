import React from "react";
import "./Grid.css";
import { Image, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
import { faPlaneArrival} from "@fortawesome/free-solid-svg-icons";
import { faPlane} from "@fortawesome/free-solid-svg-icons";
import { faTruckPlane} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button, Card} from 'react-bootstrap';

const Grid = ( { aircraft, airlineTailLogo } ) =>
{

    return (
        <>
        <Row className="aircraft-data-wrapper">
            {aircraft.map((data) => (
            <Col xxl="3" xl="3" lg="4" md="6" sm="12" xs="12" key={data.id}>
                <Card className="aircraft-card">
                    <Col id="aircraft-img">
                        <img src={airlineTailLogo}></img>
                    </Col>
                    <ListGroup className="aircraft-list-group">
                        <ListGroupItem id="aircraft-status">
                            {data.STATUS === "Loading" &&
                            <FontAwesomeIcon icon={faTruckPlane}/>
                            }
                            {data.STATUS === "Arrival" &&
                                <FontAwesomeIcon icon={faPlaneArrival}/>
                            } 
                            {data.STATUS === "Departure" &&
                                <FontAwesomeIcon icon={faPlaneDeparture}/>
                            } 
                            {data.STATUS === "Flight" &&
                                <FontAwesomeIcon icon={faPlane}/>
                            } 
                            <Button>Cargo</Button>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">Code</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data.CODE}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">Manufacture</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data.MFR}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">Model</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data.MODEL}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">Aircraft Type</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data["TYPE-ACFT"]}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">Engine Type</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data["TYPE-ENG"]}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">AC Cat</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data["AC-CAT"]}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label">Build Cert:</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data["BUILD-CERT-IND"]}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label"># Engines</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data["NO-ENG"]}</label>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                        <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-info-col">
                            <label className="aircraft-info-label"># Seats</label>
                            </Col>
                            <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className="aircraft-value-col">
                            <label className="aircraft-value-label">{data["NO-SEATS"]}</label>
                            </Col>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

        </Col>))}
      </Row>
    </>
    );
}

export default Grid;