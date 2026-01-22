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
                            <p>If you're experiencing issue or having concerns about this website template, join the discussion <a href="#">on our forum</a>
                                and meet other people in the community who share the same interests.</p>
                        </Row>
                    </div>
                    <div>
                        
                    </div>
                </Container>
            </Container>
        </>
    );
}

export default About;