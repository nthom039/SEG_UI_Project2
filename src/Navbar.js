import React from 'react';
import { useState } from 'react';
import { Button, Offcanvas, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <div className="newNav">
            <Row>
                <Col className="logo">
                    <h1>Logo</h1>
                </Col>
                <Col>
                    <h1>Page Name</h1>
                </Col>
                <Col className="buttons">
                    <Button variant="warning">
                        Cart
                    </Button>
                    <Button variant="warning" onClick={handleShow}>
                        Menu
                    </Button>
                </Col>
            </Row>
    
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Home</p>
                    <p>Our Work</p>
                    <p>Premade</p>
                    <p>Make Your Own</p>
                    <p>Ambitious Idea</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
        </>
    );
}

export default Navbar;