import { Button, Col, Container, Row } from 'react-bootstrap';
import chill from './assets/new-chills.png'
import berries from './assets/berries.png'
import diet from './assets/on-diet.png'
import border from './assets/bg-border.gif'


function Blog() {
    return (
        <>
            <h1 className="heading">BLOG</h1>
            <div>
                <Container className='blog'>
                    <div>
                        <Row >
                            <Col lg={2}>
                                <img src={chill} alt="new-chill" />
                            </Col>
                            <Col lg={4} className='new-chill'>
                                <h3>NEW CHILLS FOR SUMMER</h3>
                                <span>By Admin on November 28,2023</span> <br /><br />
                                <p>This website template has been designed by <a href="#">Free Website Template</a> for you, for free.
                                    You can replace all this text with your own text. Want an easier solution for a <a href="#">Free Website?</a> Head straight to <a href="#">Wix</a> 
                                     and immediately start customizing your website! <a href="#">Wix</a> is an online website builder with a simple drag & drop interface, meaning
                                    you do the work online and instantly publish to the web. Nothing ti download, nothing to upload. All <a href="#">Wix</a> templates are fully customizable
                                    and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like</p>
                                <Button variant="outline-dark">READ MORE</Button>
                            </Col>
                        </Row>
                    </div>
                    <img src={border} alt="border" />
                    <div className='diet'>
                        <Row className='diet-content'>
                            <Col lg={3}>
                                <h4>Recent Post</h4>
                                <img src={diet} alt="diet" className='diet-img' />
                                <h3>ON THE DIET</h3>
                                <p>By Admin on November 28,2023</p>
                                <p>This is just a place holder, so you can see what the site would look like.</p>
                                <Button variant="outline-dark">READ MORE</Button>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className='berries'>
                            <Col lg={2}>
                                <img src={berries} alt="berries" />
                            </Col>
                            <Col lg={4}>
                                <h3>BERRIES ON THE GROVE</h3>
                                <p>By Admin on November 28, 2023</p>
                                <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
                                <Button variant="outline-dark" size='lg'>READ MORE</Button>
                            </Col>
                        </Row>
                    </div>
                    <img src={border} alt="border" />
                    <Button variant="outline-dark">READ MORE</Button>
                </Container>
            </div>
        </>
    );
}

export default Blog;