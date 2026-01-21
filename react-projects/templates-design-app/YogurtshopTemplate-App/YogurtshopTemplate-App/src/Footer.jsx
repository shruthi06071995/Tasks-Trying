import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import facebook from './assets/facebook.png';
//import { BsFacebook, BsGoogle, BsPinterest, BsTwitter } from "react-icons/bs";
import twitter from './assets/twitter.png';
import google from './assets/google.png';
import pintrest from './assets/pintrest.png';
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Container fluid className="media">
                <Container>
                    <Row className="social justify-content-center text-center">
                        <Col xs="auto" ><img src={facebook} width={30} alt="" /></Col>
                        <Col xs="auto" ><img src={twitter} width={30} alt="" /></Col>
                        <Col xs="auto" ><img src={google} width={30} alt="" /></Col>
                        <Col xs="auto" ><img src={pintrest} width={30} alt="" /></Col>
                    </Row>
                    <Row className="text-center mt-3">
                        <Col>@ 2023 Freeeze.All Rights Reserved</Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Footer;