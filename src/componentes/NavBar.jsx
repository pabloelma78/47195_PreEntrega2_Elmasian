import React from 'react';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Comercio</Navbar.Brand>
        <Nav className="me-auto">
          <Link style={{textDecoration: "none", marginRight: "10px"}} to="/">Home</Link>
          <Link style={{textDecoration: "none", marginRight: "10px"}} to="/about">About</Link>
          <Link style={{textDecoration: "none", marginRight: "10px"}} to="/contact">Contact</Link>
          <Link style={{textDecoration: "none", marginRight: "10px"}} to="/category">Men´s clothing</Link>
        </Nav>
        
      </Container>
      <CartWidget/>
    </Navbar>
)}

export default NavBar;



