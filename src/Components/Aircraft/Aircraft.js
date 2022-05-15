import React from "react";
import "./Aircraft.css";
import { Image, Form } from 'react-bootstrap';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { faBorderAll} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button} from 'react-bootstrap';
import tail from "./qatar_tail_logo.png";

const Aircraft = ( { aircraft } ) =>
{

    return (
        <>
        <Row className='aircraft-info'>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Code</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Manufacture</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Model</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Type Aircraft</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Type Engine</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>AC Cat</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Build Cert</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Number Engines</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Number Seats</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            <label>Aircraft Class</label>
            </Col>
            <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
            
            </Col>
        </Row>
        <Row className="aircraft-data-wrapper">
            {aircraft.map((data) => (
            <Row className='aircraft-data'>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                    <img src={tail} className="fluid"></img>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.CODE}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.MFR}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.MODEL}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data['NO-ENG']}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.SPEED}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.SPEED}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.SPEED}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.SPEED}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.SPEED}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                <label>{data.SPEED}</label>
                </Col>
                <Col xxl="1" xl="1" lg="1" md="1" sm="1" xs="1">
                    <Button>Cargo</Button>
                </Col>
        </Row>))}
      </Row>
    </>
    );
}

export default Aircraft;