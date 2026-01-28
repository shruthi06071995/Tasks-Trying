import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from './assets/logo.png';


function Navigationbar() {
    return (
        <>
            <Navbar expand="lg" className=' navcolor'>
                <Container className='nav'>
                    <Navbar.Brand href="#">
                        <img src={logo} width={150} height={50} className='d-inline-block align-top' alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto navin align-items-center'>

                            {/* Home */}
                            <Nav.Link className='home' as={Link} to='/' >HOME</Nav.Link>

                            {/*About + Dropdown (joined)*/}
                            <Nav.Link className='about-link' id='about' as={Link} to='/about'>ABOUT</Nav.Link>

                            {/* Product dropdown under about */}
                            <NavDropdown  id='about-product-dropdown' className='about-dropdown'>
                                <NavDropdown.Item as={Link} to='/product' >PRODUCT</NavDropdown.Item>
                            </NavDropdown>

                            {/* Blog + Dropdown (joined) */}
                            <Nav.Link className='blog-link' id='about' as={Link} to='/blog'>BLOG</Nav.Link>

                            {/* Single Post dropdown under about */}
                            <NavDropdown id='blog-singlepost-dropdown' className='blog-dropdown' >
                                <NavDropdown.Item as={Link} to='/singlepost' >SINGLE POST</NavDropdown.Item>
                            </NavDropdown>

                            {/* Contact */}
                            <Nav.Link className='contact' id='about' as={Link} to='/contact' >CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigationbar;