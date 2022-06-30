import puzzleBanner from "./Home/puzzle-banner.jpg"
import smallImage from "./Home/puzzleSmall.jpg"
import { Col, Row, Button } from "react-bootstrap";

const Home = () => {
    return (
        <div className="home">
            <img className="banner" src={ puzzleBanner } alt="..." />
            <div className="description">
                <h1>How We Roll</h1>
                <p>This is how we roll, this will be a quick definition of what the site it for and all the cool features.</p>
            </div>
            <div className="services">
                <Row>
                    <Col>
                        <img src={ smallImage } class="img-fluid" alt="..." />
                        <p>View Our Work</p>
                        <p>Text description thing</p>
                    </Col>
                    <Col>
                        <img src={ smallImage } class="img-fluid" alt="..." />
                        <p>Chose From Our Premade Selection</p>
                        <p>Text description thing</p>
                    </Col>
                    <Col>
                        <img src={ smallImage } class="img-fluid" alt="..." />
                        <p>Make Your Puzzle Come True</p>
                        <p>Text description thing</p>
                    </Col>
                    <Col>
                        <img src={ smallImage } class="img-fluid" alt="..." />
                        <p>Have an Abitious Idea? Give Us a Call</p>
                        <p>Text description thing</p>
                    </Col>
                </Row>
            </div>
            <Button className="button">Make your puzzle now</Button>
        </div>
    );
}
 
export default Home;