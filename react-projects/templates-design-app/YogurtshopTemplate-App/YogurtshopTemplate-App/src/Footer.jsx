import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
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
                <Row className="social">
                    <Col xs={2} ><img src={facebook} width={40} alt="" /></Col>
                    <Col xs={2} ><img src={twitter} width={40} alt="" /></Col>
                    <Col xs={2} ><img src={google} width={40} alt="" /></Col>
                    <Col xs={2} ><img src={pintrest} width={40} alt="" /></Col>
                    <p>@ 2023 Freeeze.All Rights Reserved</p>
                </Row>
                
            </Container>
        </>
    );
}

export default Footer;