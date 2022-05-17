import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'

const Mypage = () => {


  const callData = (e) => {
    e.preventDefault();
    const {email} = e.target
    console.log(email)
  }

  const user = localStorage.getItem('user');


  return (
    <Container>
      <Form className='mypage-form' onSubmit={(e)=>(callData(e))}>
        <h2>마이페이지</h2>
        <fieldset disabled>
          <div> {user.value} </div>
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="disabledTextInput">지갑 주소</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="지갑주소 생성 수정불가" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">잔액</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="잔액 수정불가" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput" onSubmit={callData}>이메일</Form.Label>
            <Form.Control id="disabledTextInput" name="email" placeholder="이메일 가져오기 수정불가" />
          </Form.Group>
        </fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
            <Form.Control type="password" id="disabledTextInput" placeholder="비밀번호" />
          </Form.Group>
          <Button variant="outline-primary" type="submit">수정</Button>
      </Form>
    </Container>
      // <Container>
      //   <Form className='mypage-form'>
      //     <Form.Group className="mb-3">
      //       <Form.Label>Disabled input</Form.Label>
      //       <Form.Control placeholder="지갑주소" disabled />
      //     </Form.Group>
      //     <Form.Group className="mb-3">
      //       <Form.Label>Disabled input</Form.Label>
      //       <Form.Control placeholder="이메일" disabled />
      //     </Form.Group>
      //     <Form.Group className="mb-3" controlId="formEmail">
      //       <Form.Label>비밀번호</Form.Label>
      //       <Form.Control type="password" placeholder="비밀번호 수정."/>
      //     </Form.Group>
      //   </Form>
      // </Container>
  )
}

export default Mypage