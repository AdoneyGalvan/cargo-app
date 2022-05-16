import React from "react";
import "./Table.css";
import { Image, Form } from 'react-bootstrap';
import { faPlaneDeparture} from "@fortawesome/free-solid-svg-icons";
import { faPlaneArrival} from "@fortawesome/free-solid-svg-icons";
import { faPlane} from "@fortawesome/free-solid-svg-icons";
import { faTruckPlane} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button} from 'react-bootstrap';

const Table = ( { aircraft, airlineTailLogo } ) =>
{

    return (
        <>
        <Row className='aircraft-info'>
            <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
            
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
            <label>Code</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Manufacture</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Model</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Aircraft Type</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Engine Type</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>AC Cat</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Build Cert</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Number Engines</label>
            </Col>
            <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
            <label>Number Seats</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
            <label>Status</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
            
            </Col>
        </Row>
        <Row className="aircraft-data-wrapper">
            {aircraft.map((data) => (
            <Row className='aircraft-data'>
                <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
                    <img src={airlineTailLogo} className="fluid"></img>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
                <label>{data.CODE}</label>
                </Col>
                <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data.MFR}</label>
                </Col>
                <Col className="d-none d-md-block"  xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data.MODEL}</label>
                </Col>
                <Col className="d-none d-md-block"  xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data["TYPE-ACFT"]}</label>
                </Col>
                <Col className="d-none d-md-block"  xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data["TYPE-ENG"]}</label>
                </Col>
                <Col className="d-none d-md-block"  xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data["AC-CAT"]}</label>
                </Col>
                <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data["BUILD-CERT-IND"]}</label>
                </Col>
                <Col className="d-none d-md-block" xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data["NO-ENG"]}</label>
                </Col>
                <Col className="d-none d-md-block"  xxl="1" xl="1" lg="1" md="1" sm="0" xs="0">
                <label>{data["NO-SEATS"]}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
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
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="3" xs="3">
                    <Button>Cargo</Button>
                </Col>
        </Row>))}
      </Row>
    </>
    );
}

export default Table;