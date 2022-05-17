import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Form ,Button, Container} from 'react-bootstrap'


const LoginPage = () => {
  const navigate = useNavigate()

  const goToSignup = () => {
    navigate('/')
  }


  return (
    <Container>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>login</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit" onClick={goToSignup} >
            로그인
          </Button>
        </Form>

    </Container>
  )
}

export default LoginPage