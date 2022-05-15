/* import logo from './logo.svg'; */
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import airlineColors from './airline-colors.json';
import SearchBar from './Components/SearchBar/SearchBar';
import Filters from './Components/Filters/Filters';
import Toggle from './Components/Toggle/Toggle';
import aircraft from './aircraft-data.json';
import Aircraft from './Components/Aircraft/Aircraft';

function App() {

  const [toggled, setToggled] = useState(false);

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

  return (
    <>
    <Container id='header-wrapper'>
      <Row id='header'>
        <SearchBar></SearchBar>
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
            <Aircraft aircraft={aircraft}></Aircraft>
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
