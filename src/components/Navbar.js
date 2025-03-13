import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaBox } from "react-icons/fa"; 
import "./css/Navbar.css"; 

const CustomNavbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">UP TO 40% OFF | SHOP NOW
        {/* Icons (Orders, Login, Cart) */}
        <Nav className="ms-3">
              <Nav.Link href="#"><FaBox /> Orders</Nav.Link>
              <Nav.Link href="#"><FaUser /> Login</Nav.Link>
              <Nav.Link href="#"><FaShoppingCart /> Cart</Nav.Link>
            </Nav>
      </div>
      <div className="navbrand">
      <Navbar.Brand href="#">Purely Handmade</Navbar.Brand>
      </div>
      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search Bar */}
            <Form className="d-flex mx-auto search-bar">
              <FormControl type="search" placeholder="Search for Products" className="me-2" />
              <Button variant="success">🔍</Button>
            </Form>

            {/* Menu Links */}
            <Nav className="ms-auto navlink">
              <Nav.Link href="/soap">Soap</Nav.Link>
              <Nav.Link href="#">Oil</Nav.Link>
              <Nav.Link href="#">Shampoo</Nav.Link>
              <Nav.Link href="#">Candle</Nav.Link>
              <Nav.Link href="#">Pickle</Nav.Link>
            </Nav>

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
