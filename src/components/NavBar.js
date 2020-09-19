import React from "react";
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Person = props => (
    <Navbar expand="md" variant="dark" className="bg-primarytwo" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://cdn2.iconfinder.com/data/icons/cute-pug-dog-emoticon/512/Pug_Emoji_happy-512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    bro
                </Navbar.Brand>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Person;