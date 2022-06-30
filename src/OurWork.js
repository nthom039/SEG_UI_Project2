import { Col, Row, Button } from "react-bootstrap";
import smallImage from "./Home/puzzleSmall.jpg"

const OurWork = () => {
    return (
        <div className="ourWork">
            <h3>We've made puzzles for movies, musicians and companies</h3>
            <div>
                <Row>
                    <Col>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>Top Gun</p>
                        </div>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>Sharknado</p>
                        </div>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>True Romance</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>Wu-Tang Clan</p>
                        </div>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>Nick Cage</p>
                        </div>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>Elvis</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>Apple</p>
                        </div>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>New Balance</p>
                        </div>
                        <div>
                            <img src={ smallImage } class="smallImg" alt="..." />
                            <p>CBC</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <p>Click on the puzzles to see an in depth view</p>
            <Button className="button">Make your puzzle now</Button>
        </div>
    );
}

export default OurWork;