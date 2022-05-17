import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Form ,Button, Container} from 'react-bootstrap'
import axios from 'axios'

const LoginPage = (props) => {
  const {user} = props;
  const navigate = useNavigate()

  // const goToSignup = () => {
  //   navigate('/')
  // }


  const loginAfter = (e) => {
    e.preventDefault();
    console.log('login user functioin issue')
    console.log(e.target)
    // 이런 식으로 뽑아와서 넘겨주기
    const {email, password} = e.target
    console.log(email.value)

    // const {password} = e.target
    console.log(password.value)
    // 이런식으로 봅아와서 서버에 넘긴다.

    axios.get(`http://localhost:3500/loginGet`,{
      // 서버로 데이터를 넘긴다.
      params: {
        email: email.value,
        password: password.value,
      }
    })
    // res 저장
    .then((res)=> {
      console.log(res)
      // 메세지에 따라서 행동을 할수잇따
    })

    // props.setAuthenticate(true)
    // navigate('/')
  }

  const clickHandler = () => {
    props.setAuthenticate(true)
  }

  const clickToSign = () => {
    navigate('/signup')
  }




  

  return (
    <Container>
        <Form  onSubmit={(e) => {loginAfter(e)}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>login</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button type="submit"  onClick={() => {clickHandler()}} >
            로그인
          </Button>
          <Button type="submit" variant="danger"  onClick={() => {clickToSign()}} >
            회원가입
          </Button>
        </Form>

    </Container>
  )
}

export default LoginPage;