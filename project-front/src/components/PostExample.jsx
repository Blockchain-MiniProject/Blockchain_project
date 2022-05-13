import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';

const PostExample = () => {
  const [peer, setPeer] = useState("")

  const peerHandler = (e) => {
    setPeer(e.target.value)
  }

  const handleClick = () => {
    axios.post('http://localhost:3500/addPeer', {peer})
  }
  
  return (
    <>
      <input type="text" placeholder="peerIP입력" value={peer || ""} onChange={peerHandler}/>
      <Button variant="warning" onClick={handleClick}>miningButton</Button>{' '}
    </>
  )
}

export default PostExample;