import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navBarCust.css'
import { Link } from 'react-router-dom';

class navBarCust extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Seabolt</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">About Us</NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">News</NavItem>
                    </Nav>
                </Navbar.Collapse>           
            </Navbar>
        );
    }
}

export default navBarCust;
