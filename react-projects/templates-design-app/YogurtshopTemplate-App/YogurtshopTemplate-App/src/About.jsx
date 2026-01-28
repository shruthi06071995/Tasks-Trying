import { Col, Container, Row } from "react-bootstrap";
import about from './assets/bg-header-about.jpg'

function About() {
    return (
        <>
            <h1 className="heading">ABOUT</h1>
            <div className="about-image-wrapper">
                <img src={about} alt="about" />
            </div>
            <Container className="aboutclass">
                <div>
                    <Row>
                        <Col lg={3} className="horizontal">
                            <h3>BE PART OF OUR COMMUNITY</h3>
                            <p>If you're experiencing issue or having concerns about this website template, join the discussion <a href="#">on our forum</a>
                                and meet other people in the community who share the same interests.</p>
                        </Col>
                        <Col lg={7} className="vertical">
                            <h2>WE HAVE FREE TEMPLATES FOR EVERYONE</h2>
                            <p>Our website templates are created with inspiration, checked for quality and originality and meticulously
                                sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them.
                                <br /><br />
                                You can use them to design websites for clients, so long as you agree with the <a href="#">Terms of Use.</a>
                                You can even remove all our links if you want to.
                            </p>
                            <h2>WE HAVE MORE TEMPLATES FOR YOU</h2>
                            <p>Looking for more templates? Just browse through all our <a href="#">Free Website Templates.</a> But if you can't find any
                                website templates you can use, try our <a href="#">Free Web Design</a> service and tell us all about it. We love a good challenge!</p>
                            <h2>TEMPLATE DETAILS</h2>
                            <p>Design Version 2.</p>
                            <p>Code Version 1</p>
                            <p>Website Template details, discussion and updates for this <a href="#">Frozen Yogurt Shop Website Template.</a></p>
                            <p>Website Template design by <a href="#">Free Website Template.</a></p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default About;