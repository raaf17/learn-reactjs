import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';

const NavigationBar = ({navValue}) => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav.Link href="https://google.com" target="_blank">
            {!navValue ? "About" : navValue}
          </Nav.Link>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar