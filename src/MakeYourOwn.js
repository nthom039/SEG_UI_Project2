import { Card, Button, Col, Row } from "react-bootstrap";
import holderImage from "./PremadeWork/cardPuzzleHolder.jpg"

const MakeYourOwn = () => {
    return (
        <div className="makeYourOwn">
            <h3 className="title">Customize it to your liking</h3>
            <Row>
                <Col className="card">
                    <p className="title"><strong>Pick Your Shape</strong></p>
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>Rectangle</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>Circle</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>Star</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className="card">
                    <p className="title"><strong>Pick the number of peices</strong></p>
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>48</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>200</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>1000</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className="card">
                    <p className="title"><strong>Upload your image</strong></p>
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Body>
                            <Card.Title>Import Your Image</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>Monochrome</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div>
                        <Card style={{ width: '11rem' }}>
                        <Card.Img variant="top" src={holderImage} />
                        <Card.Body>
                            <Card.Title>Full Color</Card.Title>
                            <Button variant="primary">Select</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className="price">Total Price</p>
                </Col>
                <Col>
                <Button>Add to cart</Button>
                </Col>
            </Row>
        </div>
    );
}

export default MakeYourOwn;