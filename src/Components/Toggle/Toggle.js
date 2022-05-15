import React from "react";
import "./Toggle.css";
import { Image, Form } from 'react-bootstrap';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { faBorderAll} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toggle = ( { toggled, onClick } ) =>
{

    return (
        <div className={`toggle${toggled ? " selected" : ""}`} onClick={onClick}>
            <div className="notch"></div>
            <FontAwesomeIcon id="option-1" icon={faBars}/>
            <FontAwesomeIcon id="option-2" icon={faBorderAll}/>
        </div>
    );
}

export default Toggle;