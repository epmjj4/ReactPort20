import React from 'react';
import './MyNavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'



function MyNavBar() {
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="#home">Ernesto Pelaez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavBar;
