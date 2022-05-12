import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';

const MiningButton = () => {
  const handleClick = async() => {
    const result = await axios.get('http://localhost:3001')  ;
    alert(result.data);
  }
  
  return (
    <div>
      <Button variant="warning" onClick={handleClick}>miningButton</Button>{' '}
    </div>
  )
}

export default MiningButton