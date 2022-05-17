import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Table } from 'react-bootstrap'
import axios from "axios"

const Mypage = () => {
  const address = localStorage.getItem("address")

  const navigate = useNavigate();

  const [myInfo,setMyInfo] = useState({});
  const [blocks,setBlocks] = useState([]);

  const callApi = async () => {
    const result = await axios.get("http://localhost:3500/myInfo",{
      params: {
        address: address
      }
    })
    setMyInfo(result.data[0])
    setBlocks(result.data[1])
  }

  const searchHash = (index) => {
    console.log(index)

    navigate(`/block/${index}`)
  }

  useEffect(()=>{
    callApi();
  }
  ,[])

  console.log(myInfo)
  console.log(blocks)

  return (
    <>
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
    <Container className='block-data'>
    <h2>내 블록들</h2>
    <Table striped bordered hover responsive="lg">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Data</th>
          <th scope="col">Timestamp</th>
          <th scope="col">Hash</th>
        </tr>
      </thead>
      <tbody>
        {blocks.map((block,index) => {
          const time = Number(block.timestamp)*1000;
          const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
          //console.log(date);
          return     <tr key={index}>
                        <th scope="row">{block.index}</th>
                        <td>{block.data}</td>
                        <td>{date}</td>
                        {/* <td>{() => timeStamp(data.timestamp)}</td> */}
                        {/* 실행구문이 있어서 */}
                        <td className='block-hash' onClick={()=>{searchHash(block.index)}}><b>{block.hash}</b></td>
                      </tr>            
        })}
      </tbody>
    </Table>
</Container>
</>
  )
}

export default Mypage