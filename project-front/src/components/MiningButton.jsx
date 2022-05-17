import React from 'react'
import { Button } from 'react-bootstrap';

const MiningButton = ({ onClick }) => {
  return (
    <div className='mining-button'>
      <Button variant="secondary" onClick={onClick}>miningButton</Button>
    </div>
  )
}

export default MiningButton;