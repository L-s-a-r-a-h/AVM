import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {useNavigate } from 'react-router-dom';

import "./MenuBar.css";
function MenuBar() {
    const navigate = useNavigate();

    //log out -----------------need to complete
    const handleLogout = () => {

        localStorage.clear();
        console.log("Log out");
        navigate("/Login");
      };


    return (
  
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
                        <h4 onClick={handleLogout} >log out</h4>
                    </div>
                    </Container>
                </Navbar>
            </div>

    );
}

export default MenuBar;