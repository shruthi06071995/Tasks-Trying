// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Demo() {
//     return (
//         <Container>
//             <Row>
//                 <Col>1 of 3</Col>
//                 <Col xs={6}>2 of 3 (wider)</Col>
//                 <Col>3 of 3</Col>
//             </Row>
//             <Row>
//                 <Col>1 of 3</Col>
//                 <Col xs={5}>2 of 3 (wider)</Col>
//                 <Col>3 of 3</Col>
//             </Row>
//             <button className='btn btn-danger'>Submit</button>
//         </Container>
//     );

// }

// export default Demo 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import logo from './assets/logo.png';

function Navigationbar() {
    return (
        <>
        <Navbar className=' navcolor'>
            <Container className='nav'>
                <Navbar.Brand href="#">
                    <img src={logo} width={150} height={50} className='d-inline-block align-top' alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls= "basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='navitems' >
                        <Nav.Link className='home' href='#home'>HOME</Nav.Link>
                        <NavDropdown title='ABOUT'id='basic-nav-dropdown' className='dropdown' >
                            <NavDropdown.Item href='#product' >PRODUCT</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='BLOG'id='basic-nav-dropdown' className='dropdown' >
                            <NavDropdown.Item href='#singlepost'>SINGLE POST</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#contact'>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigationbar;