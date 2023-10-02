import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './assets/logo';

const Navbar = () => {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-center"
                        alt="React Bootstrap logo"
                    />
                    <b><i>HealthHub</i></b>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navbar;