import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';

const MiningButton = (e) => {
  const handleClick = async () => {

    try {
      console.log('result')

      const result = await axios.post('http://localhost:3500/mineBlock', /* data : */ null)
      console.log(result)

    }catch(e){         //에러감지
      // 비어있을시
      alert('error')
    }
  }
  
  return (
    <div>
      <Button variant="warning" onClick={handleClick}>miningButton</Button>
    </div>
  )
}

export default MiningButton;