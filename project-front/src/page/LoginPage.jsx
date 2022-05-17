import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Form ,Button, Container} from 'react-bootstrap'
import axios from 'axios'

const LoginPage = (props) => {
  const {user} = props;
  const navigate = useNavigate()

  const mtStorage = window.localStorage;

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
      if(res.data=="error"){
        alert("이메일과 비밀번호를 확인해주세요")
      }
      else{
        navigate('/')
        const {address, email} = res.data
        localStorage.setItem("address",address)
        localStorage.setItem("id",email.split("@")[0])
      }
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
        <Form className='login-form' onSubmit={(e) => {loginAfter(e)}}>
          <h3>로그인</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" name="email" placeholder="이메일을 입력해주세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" name="password" placeholder="비밀번호를 입력해주세요." />
          </Form.Group>
          <Button type="submit" variant="primary" onClick={() => {clickHandler()}} >
            로그인
          </Button>
          <Button type="submit" variant="outline-primary" onClick={() => {clickToSign()}} >
            회원가입
          </Button>
        </Form>
    </Container>
  )
}

export default LoginPage;