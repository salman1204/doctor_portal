import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./TopNav.css";

const TopNav = () => {
  return (
    <Navbar expand="lg">
        <Nav className="ml-auto">
          <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
          <Nav.Link className="mr-5" href="#link">About</Nav.Link>
          <Nav.Link className="mr-5" href="#home">Dental Services</Nav.Link>
          <Nav.Link className="mr-5 text-white" href="#link">Reviews</Nav.Link>
          <Nav.Link className="mr-5 text-white" href="#home">Blog</Nav.Link>
          <Nav.Link className="mr-5 text-white" href="#link">Contact Us</Nav.Link> 
        </Nav>
    </Navbar>
  );
};

export default TopNav;
