import React, { useState } from 'react';
import { Form, Card, Container, Col, Row } from 'react-bootstrap';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword }
        console.log("Welcome", newUser);
    };

    const Validate = () => {
        if (firstName.length + lastName.length + email.length + password.length + confirmPassword.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First name is Required!");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name needs to be at least 3 Characters!");
        } else {
            setFirstNameError()
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is Required!");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name needs to be at least 3 Characters!");
        } else {
            setLastNameError()
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email Field is Required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email needs to be at least 5 Characters long!")
        } else {
            setEmailError()
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is Required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password needs to be at least 8 Characters Long!")
        } else {
            setPasswordError()
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be at least 8 Characters Long!");
        } else if (password !== e.target.value) {
            setConfirmPasswordError("Passwords must Match!")
        } else {
            setConfirmPasswordError()
        }
    }



    return (
        <Container>
            <Card>
                <Form onSubmit={createUser}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label  className="card1" column sm={3}>
                            First Name:
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control  type="text" placeholder="Type Name" onChange={handleFirstName} />
                        </Col>
                        </Form.Group>
                            {firstNameError && Validate() === false ? <p style={{ color: '#960018' }} > {firstNameError}</p> : ''}

                    <Form.Group as={Row} controlID="fromHorizontalEmail">
                        <Form.Label  className="card1" column sm={3}>
                            Last Name:
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="text" placeholder="Type Name" onChange={handleLastName} />
                        </Col>
                    </Form.Group>
                            {lastNameError && Validate() === false ? <p style={{ color: '#960018' }} > {lastNameError}</p> : ''}

                    <Form.Group as={Row} controlId="fromHorizontalEmail">
                        <Form.Label  className="card1" column sm={3}>
                            Email:
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="text" placeholder="Enter Email Address" onChange={handleEmail} />
                        </Col>
                    </Form.Group>
                            {emailError && Validate() === false ? <p style={{ color: '#960018' }} > {emailError}</p> : ''}

                    <Form.Group as={Row} controlId="fromHorizontalEmail">
                        <Form.Label  className="card1" column sm={3}>
                            Password:
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} />
                        </Col>
                    </Form.Group>
                            {passwordError && Validate() === false ? <p style={{ color: '#960018' }} > {passwordError}</p> : ''}

                    <Form.Group as={Row} controlId="fromHorizontalEmail">
                        <Form.Label className="card1" column sm={3}>
                            Confirm Password:
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} />
                        </Col>
                    </Form.Group>
                            {confirmPasswordError && Validate() === false ? <p style={{ color: '#960018' }} > {confirmPasswordError}</p> : ''}
                </Form>
            </Card>
        </Container>
    )

}

export default UserForm;