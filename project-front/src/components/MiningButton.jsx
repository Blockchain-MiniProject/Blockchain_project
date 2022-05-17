import React from 'react'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

const MiningButton = ({ onClick }) => {
  // const handleClick = async () => {

  //   try {
  //     console.log('result')

  //     const result = await axios.post('http://localhost:3500/mineBlock', /* data : */ null)
  //     console.log(result)

  //   }catch(e){         //에러감지
  //     // 비어있을시
  //     alert('error')
  //   }
  // }
  
  return (
    <Container>
      <Button variant="secondary" className='mining-button' onClick={onClick}>miningButton</Button>
    </Container>
  )
}

export default MiningButton;