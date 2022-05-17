import React from 'react'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

const MiningButton = ({ onClick }) => {
  return (
    <div className='mining-button'>
      <Button variant="secondary" onClick={onClick}>miningButton</Button>
    </div>
  )
}

export default MiningButton;