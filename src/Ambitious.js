import { Form, Button } from 'react-bootstrap';

const Ambitious = () => {
    return (
        <div className="ambitious">
            <h2 className='title'>Tell Us What Your Looking For</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Occasion</Form.Label>
                    <Form.Control type="text" placeholder="Enter Occasion" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Company/Individuas Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Shape</Form.Label>
                    <Form.Control type="text" placeholder="Enter Shape" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Detailed Description of What Your Looking For</Form.Label>
                    <Form.Control type="text" rows="3"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Ambitious;