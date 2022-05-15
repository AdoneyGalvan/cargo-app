import "./SearchBar.css";
import { Image, Form, FormControl, Col, Badge } from 'react-bootstrap';
import logo from './qatar_logo.png';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ }) => {



    return (
        <>
            <Col Col xxl="2" xl="2" lg="2" md="0" sm="0" xs="0">
                <Image id="searchBar-image" fluid="true" src={logo}>
                </Image>
            </Col>
            <Col Col xxl="10" xl="10" lg="10" md="12" sm="12" xs="12">            
                <Form id="searchBar-form">
                    <FontAwesomeIcon id="searchBar-manifyglass" icon={faMagnifyingGlass} size="2x"/>
                    <FormControl id="searchBar-form-control" type="text" placeholder="Search for Item"/>
                    <FontAwesomeIcon id="searchBar-cross" icon={faTimes} size="2x"/>
                </Form>
            </Col>
        </>
    )
}

export default SearchBar;