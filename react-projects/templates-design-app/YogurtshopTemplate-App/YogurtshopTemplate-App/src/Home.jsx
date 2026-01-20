import React from 'react';
import icon from '../public/icons.png'
import Container from 'react-bootstrap/esm/Container';
import background from './assets/bg-home.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import yogurt from '../src/assets/yogurt.png';
import product from './assets/product.png';
import story from './assets/story.png';
import tasty from './assets/tasty.png';
import gps from './assets/gps.png';

function Home() {
    return (
        <>
            <Container fluid className='home-section'>
                <Container>
                    {/* <img src={background} width={500} height={500} alt="background" /> */}
                    <img className='icon-image' src={icon} alt="icon" />
                    <a className='icon-content' href="#"><h3>FREEZE <br />DELIGHT</h3></a>
                </Container>
            </Container>
            <div>
                <Container fluid className='mid-section'>
                    <Container className='mid-content'>
                        <Row className='sm ="d-flex"'>
                            <Col sm={7} >
                                <h4>NEW PRODUCT</h4>
                                <h2><b>The Twist of Healthy Yogurt</b></h2>
                                <p>This website template has been designed by <br /><a className='mid-h' href="#">Free Website Templates</a><br /> for you, for free. You can replace all this text with your own text.</p>
                            </Col>
                            <Col sm={5} className='mid-image '>
                                <img src={yogurt} alt="yogurt" />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
            <Container fluid className='mid2'>
                <Container className='midi'>
                    <Row>
                        <Col md={3}>
                            <a href="#"><img src={product} width={60} alt="product-icon" /></a>
                            <h3>PRODUCTS</h3>
                        </Col>
                        <Col md={3}>
                            <a href="#"><img src={story} width={60} alt="story-icon" /></a>
                            <h3>OUR STORY</h3>
                        </Col>
                        <Col md={3}>
                            <a href="#"><img src={tasty} width={60} alt="tasty-icon" /></a>
                            <h3>FLAVORS</h3>
                        </Col>
                        <Col md={3}>
                            <a href="#"><img src={gps} width={60} alt="gps-icon" /></a>
                            <h3>OUR LOCATION</h3>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;