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
            <Col xxl="2" xl="3" lg="4" md="6" sm="12" xs="12" key={data.id}>
                <Card className="aircraft-card">
                    <img src={airlineTailLogo}></img>
                    <ListGroup>
                        <ListGroupItem className="aircraft-list-group-item">
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
                            <label className="aircraft-info-label">Code:</label>
                            <label className="aircraft-info-label">{data.CODE}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Manufacture:</label>
                            <label className="aircraft-info-label">{data.MFR}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Model:</label>
                            <label className="aircraft-info-label">{data.MODEL}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Aircraft Type:</label>
                            <label className="aircraft-info-label">{data["TYPE-ACFT"]}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Engine Type: </label>
                            <label className="aircraft-info-label">{data["TYPE-ENG"]}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">AC Cat:</label>
                            <label className="aircraft-info-label">{data["AC-CAT"]}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Build Cert:</label>
                            <label className="aircraft-info-label">{data["BUILD-CERT-IND"]}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Number Engines:</label>
                            <label className="aircraft-info-label">{data["NO-ENG"]}</label>
                        </ListGroupItem>
                        <ListGroupItem className="aircraft-list-group-item">
                            <label className="aircraft-info-label">Number Seats</label>
                            <label className="aircraft-info-label">{data["NO-SEATS"]}</label>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

        </Col>))}
      </Row>
    </>
    );
}

export default Grid;