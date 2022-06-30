import { Card, Col, Form, Row, Button } from "react-bootstrap";
import puzzleImage from "./PremadeWork/cardPuzzleHolder.jpg"

const CartCheckout = () => {
    return (
        <div className="cartCheckout">
            <Row>
                <Col sm={9}>
                    <Card  className="card">
                        <Card.Body>
                            <Card.Title className="cardTitle">Card Title</Card.Title>
                            <Row>
                                <Col><Card.Img src={puzzleImage} variant="top" /></Col>
                                <Col sm={10}><Card.Text className="priceTag">
                                    This where the description of the item purchased would go
                                </Card.Text></Col>
                                <Col sm={1}>
                                    <p>Quantity</p>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="Number" />
                                    </Form.Group>
                                    <p>Price</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitle">Card Title</Card.Title>
                            <Row>
                                <Col><Card.Img src={puzzleImage} variant="top" /></Col>
                                <Col sm={10}><Card.Text className="priceTag">
                                    This where the description of the item purchased would go
                                </Card.Text></Col>
                                <Col sm={1}>
                                    <p>Quantity</p>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="Number" />
                                    </Form.Group>
                                    <p>Price</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitle">Card Title</Card.Title>
                            <Row>
                                <Col><Card.Img src={puzzleImage} variant="top" /></Col>
                                <Col sm={10}><Card.Text className="priceTag">
                                    This where the description of the item purchased would go
                                </Card.Text></Col>
                                <Col sm={1}>
                                    <p>Quantity</p>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="Number" />
                                    </Form.Group>
                                    <p>Price</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>                    
                    <Card className="card">
                        <Card.Body>
                            <Card.Title className="cardTitle">Shipping Information</Card.Title>
                            <Row>
                                <Row>
                                    <Col><p>Name</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col><p>Address</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col><p>City</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col> <p>Country</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col><p>Zip/Postal Code</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col><p>Email</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control type="Email" />
                                    </Form.Group></Col>
                                </Row>
                            </Row>
                            <Card.Title className="cardTitle">Billing Information</Card.Title>
                            <Row>
                                <Row className="cardTypes">
                                    <Col className="cardTypes"><Button>Visa</Button></Col><Col className="cardTypes"><Button>Master</Button></Col><Col className="cardTypes"><Button>Other</Button></Col>
                                </Row>

                                <Row>
                                    <Col><p>Card Number</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col><p>Expiration Number</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control type="Date" />
                                    </Form.Group></Col>
                                </Row>

                                <Row>
                                    <Col><p>CCV</p></Col>
                                    <Col><Form.Group className="mb-3">
                                            <Form.Control type="Email" />
                                    </Form.Group></Col>
                                </Row>
                            </Row>
                            <Button>Checkout</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CartCheckout;