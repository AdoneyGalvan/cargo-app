import React from "react";
import ReactDOM from "react-dom";
import "./Filters.css";
import { Form } from 'react-bootstrap';

const Filters = ( { } ) =>
{
    return (
        <Form.Group id="filters-form-group">
            <Form.Label className="filters-form-label">Sort</Form.Label>
            <Form.Select className="filters-form-select">
                <option className="filters-form-option" value="1">Price Low to High</option>
                <option className="filters-form-option" value="2">Price High to Low</option>
                {/* <option className="filter-form-option" value="3">Distance</option> */}
                <option className="filters-form-option" value="4">Alphabetically A - Z</option>
                <option className="filters-form-option" value="5">Alphabetically Z - A</option>
            </Form.Select>

            <Form.Label className="filters-form-label">Fiter by Brand</Form.Label>
            <Form.Select className="filters-form-select">
                <option className="filters-form-option" value="1">None</option>
                <option className="filters-form-option" value="2">Walmart</option>
                <option className="filters-form-option" value="3">Fred Meyer</option>
                <option className="filters-form-option" value="4">WinCo</option>
                <option className="filters-form-option" value="5">Safeway</option>
            </Form.Select>
        </Form.Group>
)
}

export default Filters;