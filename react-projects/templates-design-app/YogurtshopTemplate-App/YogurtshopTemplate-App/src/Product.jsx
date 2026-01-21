import { Container, Row, Col } from "react-bootstrap";
import kiwi from "./assets/kiwi.jpg";
import mango from './assets/mango.jpg';
import cantaloupe from './assets/cantaloupe.jpg';
import blackberry from './assets/blackberry.jpg';
import strawberry from './assets/strawberry.jpg';
import blueberry from './assets/blueberry.jpg';
import grapes from './assets/grapes.jpg';
import greenapple from './assets/green-apple.jpg';
import pineapple from './assets/pineapple.jpg';

function Product() {
  return (
    <Container fluid>
      <h1 className="heading">PRODUCTS</h1>
      <Container className="fluid">
        <Row>
          <Col lg={3}>
            <h2>All Time Classic</h2>
            <p>This website template has been designed by <a href="#">Free Website Template</a> for you, for free. You can replace all this text with your own text.</p>
          </Col>
          <Col lg={3} className="classic">
            <img src={kiwi} alt="kiwi" width={200} />
            <h3>KIWI</h3>
          </Col>
          <Col lg={3} className="classic">
            <img src={mango} alt="mango" width={200} />
            <h3>MANGO</h3>
          </Col>
          <Col lg={1} className="classic-c">
            <img src={cantaloupe} alt="cantaloupe" width={200} />
            <h3>CANTALOUPE</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <h2>Fruit Blast</h2>
            <p>All <a href="#">Wix</a> template are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like.</p>
          </Col>
          <Col lg={3} className="blast">
            <img src={grapes} alt="grapes" width={200} />
            <h3>GRAPES</h3>
          </Col>
          <Col lg={3} className="blast">
            <img src={greenapple} alt="greenapple" width={200} />
            <h3>GREEN APPLE</h3>
          </Col>
          <Col lg={1} className="blast-p">
            <img src={pineapple} alt="pineapple" width={200} />
            <h3>PINEAPPLE</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <h2>Berry Special</h2>
            <p>Want an easier solution for a <a href="#">Free Website?</a> Head straight to <a href="#">Wix</a> and immediately start customizing your website!</p>
          </Col>
          <Col lg={3} className="special">
            <img src={blackberry} alt="blackberry" width={200} />
            <h3>BLACKBERRY</h3>
          </Col>
          <Col lg={3} className="special">
            <img src={strawberry} alt="strawberry" width={200} />
            <h3>STRAWBERRY</h3>
          </Col>
          <Col lg={1} className="special-p">
            <img src={blueberry} alt="blueberry" width={200} />
            <h3>BLUEBERRY</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Product;
