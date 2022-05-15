import React from "react";
import ReactDOM from "react-dom";
import "./Filters.css";
import { Form } from 'react-bootstrap';

const Filters = ( { } ) =>
{
    return (
        <Form.Group id="filters-form-group">
            <Form.Label className="filters-form-label">Filter By</Form.Label>
            <Form.Select className="filters-form-select">
                <option className="filters-form-option" value="1">Code</option>
                <option className="filters-form-option" value="2">Manufacture</option>
                <option className="filters-form-option" value="3">Model</option>
                <option className="filters-form-option" value="4">Aircraft Type</option>
                <option className="filters-form-option" value="5">Engine Type</option>
            </Form.Select>
        </Form.Group>
)
}

export default Filters;