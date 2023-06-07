import React from "react"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom/cjs/react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import '../css/CustomNavbar.css' 
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Galeries from "./Galeries"; 
import Home from "./Home"; 

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
            <div>
                <Switch>
                    <Route path="/about">
                      <About />  
                    </Route>
                    <Route path="/services">
                      <Services />   
                    </Route>
                    <Route path="/galeries">
                      <Galeries />    
                    </Route>
                    <Route path="/contact">
                      <Contact />   
                    </Route>
                    <Route path="/">
                      <Home />  
                    </Route>
                </Switch>
            </div>
        </Router>
                 
        </>
    )
}

export default CustomNavbar