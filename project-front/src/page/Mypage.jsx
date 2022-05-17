import React,{useEffect, useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from "axios"

const Mypage = () => {
  const address = localStorage.getItem("address")
  const [myInfo,setMyInfo] = useState({});
  const callApi = async () => {
    const result = await axios.get("http://localhost:3500/myInfo",{
      params: {
        address: address
      }
    })
    setMyInfo(result.data)
  }

  useEffect(()=>{
    callApi();
  }
  ,[])
  console.log(myInfo)

  return (
    <Container>
      <Form className='mypage-form'>
        <h2>마이페이지</h2>
        <fieldset disabled>
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="disabledTextInput">지갑 주소</Form.Label>
            <Form.Control id="disabledTextInput" value={myInfo.address} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">잔액</Form.Label>
            <Form.Control id="disabledTextInput" value={myInfo.balance} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">이메일</Form.Label>
            <Form.Control id="disabledTextInput" value={myInfo.email} />
          </Form.Group>
        </fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">비밀번호</Form.Label>
            <Form.Control type="password" id="disabledTextInput" placeholder="비밀번호" />
          </Form.Group>
          <Button variant="outline-primary" type="submit">수정</Button>
      </Form>
    </Container>
  )
}

export default Mypage