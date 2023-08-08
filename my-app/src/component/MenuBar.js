import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./MenuBar.css";

import Home from './Home'
import Start from './Start'
import Form from "./Form";
import Output from './Output'
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";

function MenuBar() {
    return (
        <Router>
            <div class="leftNav">
                <Navbar bg="light" expand="lg">
                    <Container className="container" fluid>
                    <div class="head">
                        <h2>Automated Vulnerability Management </h2>
                    </div>
                    <div class = "menubar">
                        <Navbar.Brand href="/Home"><h4 className="home">Home</h4></Navbar.Brand>
                        <Nav.Link as={Link} to={"/start"}><h4 className="linkText"> Start </h4></Nav.Link>
                        <Nav.Link as={Link} to={"/Output"}><h4 className="testOutput"> Output </h4></Nav.Link>
                        <h4>log out</h4>
                    </div>
                    </Container>
                </Navbar>
            </div>
            <Routes>
                <Route exact path='/' element ={<Home/>}/>
                <Route path='Home' element={<Home/>}> </Route>
                <Route path='Start' element={<Start/>}> </Route>
                <Route path='Form' element={<Form/>}> </Route>
                <Route path='Output' element={<Output/>}> </Route>
                <Route path='Login' element={<Login/>}> </Route>
                <Route path='Register' element={<RegistrationForm/>}> </Route>


            </Routes>

        </Router>
    );
}

export default MenuBar;