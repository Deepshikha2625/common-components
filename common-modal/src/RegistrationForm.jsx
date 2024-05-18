import React from 'react'
import CommonModal from './common-components/CommonModal'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react';

function RegistrationForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='m-3'>
            <Button variant="primary" onClick={handleShow}>
                Register
            </Button>
            <CommonModal title="Register" show={show} handleClose={handleClose} handleShow={handleShow}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                            <option value="">Choose Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        placeholder="Enter your bio"
                    >
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"

                        />
                    </Form.Group>
                </Form>
            </CommonModal>
        </div>
    )
}

export default RegistrationForm