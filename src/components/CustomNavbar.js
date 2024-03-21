import React from "react"; 

import { Navbar, Nav } from 'react-bootstrap'; 

import '../css/CustomNavbar.css' 
import { BrowserRouter as Router, Link } from "react-router-dom/cjs/react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";  

const CustomNavbar = () => {
  
    return(
        <> 
        <Router> 
            <Navbar className="custom-navbar" expand="lg"> 
                <Navbar.Brand>Menuiserie Elhad Ahamada</Navbar.Brand>   
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link as={Link} to={"/home"}>Accueil</Nav.Link>  
                    <Nav.Link as={Link} to={"/about"}>A Propos</Nav.Link>
                    <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                    <Nav.Link as={Link} to={"/galeries"}>Galeries</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            
                <AnimatedRoutes /> 
            
        </Router>
                 
        </>
    )
}

export default CustomNavbar