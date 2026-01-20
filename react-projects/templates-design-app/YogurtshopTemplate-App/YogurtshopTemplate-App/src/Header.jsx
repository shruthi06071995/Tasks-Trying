import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        <>
            <Container fluid className="topnavi" >
                <Row className="justify-content-md-center" id="topnavi-side">
                    <Col md={6}>
                        <h5>FREE WEBSITE TEMPLATES</h5>
                    </Col>
                    <Col md={2}>
                        <a href="#">DOWNLOAD </a>
                    </Col>
                    <Col md={1}>
                        <a href="#">DISCUSS</a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;