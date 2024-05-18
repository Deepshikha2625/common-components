import React, { useState } from 'react'
import CommonModal from './common-components/CommonModal'
import { Button, Form } from 'react-bootstrap'

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>
            <CommonModal title="Login" show={show} handleClose={handleClose} handleShow={handleShow}>
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"

                        />
                    </Form.Group>
                </Form>
            </CommonModal>
        </>
    )
}
