import { Container, Row } from "react-bootstrap";
import about from './assets/bg-header-about.jpg'

function About() {
    return (
        <>
            <Container fluid>
                <h1 className="heading">ABOUT</h1>
                <div className="about-image-wrapper">
                    <img src={about} alt="about" />
                </div>
                <Container>
                    <div>
                        <Row>
                            <h3>BE PART OF OUR COMMUNITY</h3>
                            <p>If you're experiencing <br />issue or having concerns <br />
                            </p>
                        </Row>
                    </div>
                </Container>
            </Container>
        </>
    );
}

export default About;