import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBar.css';

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img id='IC' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpYjiBC2EQnKyenXmvNjpKGOWN2X2afA23w&s" alt="Instacart Logo" style={{ marginRight: '10px' }} />
        Instacart
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Form className="d-flex" role="search">
            <FormControl type="search" placeholder="Search" aria-label="Search" className="me-2" />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;