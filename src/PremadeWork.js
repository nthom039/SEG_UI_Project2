import { Col, Row, Button, Card } from "react-bootstrap";
import puzzleCardHolder from "./PremadeWork/cardPuzzleHolder.jpg"

const PremadeWork = () => {
    return (
        <div className="premade">
            <h3>We've partnered up with some pretty cool people to make some pretty cool stuff</h3>
            <br />
            <br />
            <div className="boxes">
                <Row className="boxes">
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width: '20rem' }} className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Card.Img variant="top" src={puzzleCardHolder} />
                                <Row className="priceRow">
                                    <Col>
                                        <Card.Text className="priceTag">
                                            $$$
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <div className="buyButton">
                                            <Button variant="primary">Add to cart</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default PremadeWork;