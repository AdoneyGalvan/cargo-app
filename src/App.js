/* import logo from './logo.svg'; */
import './App.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import airlineColors from './airline-colors.json';
import SearchBar from './Components/SearchBar/SearchBar';
import Filters from './Components/Filters/Filters';
import Toggle from './Components/Toggle/Toggle';
import aircraft from './aircraft-data.json';
import Aircraft from './Components/Aircraft/Aircraft';
import virginTailLogo from './images/virgin-atlantic-logo-tail.png';
import virginLogo from './images/virgin-atlantic-logo-alt.png';
import alaskaTailLogo from './images/alaska-airlines-logo-tail.png';
import alaskaLogo from './images/alaska-airlines-logo-alt.png';
import qatarTailLogo from './images/qatar-airways-logo-tail.png';
import qatarLogo from './images/qatar-airways-logo-alt.png';

function App() {

  const [toggled, setToggled] = useState (false);
  const [airlineTailLogo, setAirlineTailLogo] = useState ();
  const [airlineLogo, setAirlineLogo] = useState ();

  const handleClick = () => {
      setToggled((s) => !s);
  };

  useEffect(() => {
    LoadAirlineColors();
  }, []);

  const LoadAirlineColors = () => {
    document.documentElement.style.setProperty('--airline-primary-color', `${airlineColors['airline-primary-color']}`);
    document.documentElement.style.setProperty('--airline-accent-color-1', `${airlineColors['airline-accent-color-1']}`);
    document.documentElement.style.setProperty('--airline-accent-color-2', `${airlineColors['airline-accent-color-2']}`);
    document.documentElement.style.setProperty('--airline-accent-color-3', `${airlineColors['airline-accent-color-3']}`);
    document.documentElement.style.setProperty('--airline-accent-color-4', `${airlineColors['airline-accent-color-4']}`);
  }

  const handleAirlineClick = (e) => {
    if(e.target.value == 1)
    {
      document.documentElement.style.setProperty('--airline-primary-color', `${airlineColors.Qatar['airline-primary-color']}`);
      document.documentElement.style.setProperty('--airline-accent-color-1', `${airlineColors.Qatar['airline-accent-color-1']}`);
      document.documentElement.style.setProperty('--airline-accent-color-2', `${airlineColors.Qatar['airline-accent-color-2']}`);
      document.documentElement.style.setProperty('--airline-accent-color-3', `${airlineColors.Qatar['airline-accent-color-3']}`);
      document.documentElement.style.setProperty('--airline-accent-color-4', `${airlineColors.Qatar['airline-accent-color-4']}`);
      setAirlineLogo(qatarLogo);
      setAirlineTailLogo(qatarTailLogo);
      return;
    }
    if(e.target.value == 2)
    {
      document.documentElement.style.setProperty('--airline-primary-color', `${airlineColors.Alaska['airline-primary-color']}`);
      document.documentElement.style.setProperty('--airline-accent-color-1', `${airlineColors.Alaska['airline-accent-color-1']}`);
      document.documentElement.style.setProperty('--airline-accent-color-2', `${airlineColors.Alaska['airline-accent-color-2']}`);
      document.documentElement.style.setProperty('--airline-accent-color-3', `${airlineColors.Alaska['airline-accent-color-3']}`);
      document.documentElement.style.setProperty('--airline-accent-color-4', `${airlineColors.Alaska['airline-accent-color-4']}`);
      setAirlineLogo(alaskaLogo);
      setAirlineTailLogo(alaskaTailLogo);
      return;
    }
    if(e.target.value == 3)
    {
      document.documentElement.style.setProperty('--airline-primary-color', `${airlineColors.Virgin['airline-primary-color']}`);
      document.documentElement.style.setProperty('--airline-accent-color-1', `${airlineColors.Virgin['airline-accent-color-1']}`);
      document.documentElement.style.setProperty('--airline-accent-color-2', `${airlineColors.Virgin['airline-accent-color-2']}`);
      document.documentElement.style.setProperty('--airline-accent-color-3', `${airlineColors.Virgin['airline-accent-color-3']}`);
      document.documentElement.style.setProperty('--airline-accent-color-4', `${airlineColors.Virgin['airline-accent-color-4']}`);
      setAirlineLogo(virginLogo);
      setAirlineTailLogo(virginTailLogo);
      return;
    }
  };

  return (
    <>
    <Container id='header-wrapper'>
      <Row id='header'>
        <SearchBar airlineLogo={airlineLogo}></SearchBar>
        <Form.Group id="filters-form-group">
            <Form.Label className="filters-form-label" style={{color:"var(--airline-primary-color)"}}>Airline</Form.Label>
            <Form.Select className="filters-form-select">
                <option className="filters-form-option" value="1" onClick={handleAirlineClick}>Qatar</option>
                <option className="filters-form-option" value="2" onClick={handleAirlineClick}>Alaska</option>
                <option className="filters-form-option" value="3" onClick={handleAirlineClick}>Virgin</option>
            </Form.Select>
        </Form.Group>
      </Row>
    </Container>
    <Container id="content-wrapper">
    <Row id='content'>
        <Col id='sidebar'xxl="2" xl="2" lg="2" md="12" sm="12" xs="12">
          <Filters></Filters>
        </Col>
        <Col id='main' xxl="10" xl="10" lg="10" md="12" sm="12" xs="12">
          <Row id='toggle-section'>
            <Toggle toggled={toggled} onClick={handleClick}></Toggle>
          </Row>
          <Row id='aircraft-section'>
            <Aircraft aircraft={aircraft} airlineTailLogo={airlineTailLogo}></Aircraft>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container id="footer-wrapper">
      <Row id='footer'>

      </Row>
    </Container>
    </>
  );
}

export default App;
