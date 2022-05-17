import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(0);
  const navigate = useNavigate()
  const addSignUp= async(event)=>{
    event.preventDefault();
    console.log("email은 : ", email, "password는 : ", password);
    const {data} = await axios.post('http://localhost:3500/createUser', {email, password});
    if(data){
      alert("회원가입 완료")
      navigate('/login');
    }
    else alert("이미 가입된 email입니다")
    
  }
  
  return (
    <Container >
      <Form className='signup-form' onSubmit={addSignUp}>
        <h3>회원가입</h3>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력해주세요." onChange={(event)=>setEmail(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요." onChange={(event)=>setPassword(event.target.value)}/>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          회원가입
        </Button>
      </Form>
    </Container>
  )
}

export default SignupPage