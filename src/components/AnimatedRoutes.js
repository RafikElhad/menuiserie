import React from 'react'
import { BrowserRouter as  Switch, Route, useLocation } from "react-router-dom/cjs/react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Galeries from "./Galeries"; 
import Home from "./Home"; 
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <>
    <AnimatePresence>
        <Switch location={location} key={location.pathname}> 
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
    </AnimatePresence>
    
    </>
  )
}

export default AnimatedRoutes
