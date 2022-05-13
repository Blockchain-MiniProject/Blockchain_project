import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios'

const AddButton = () => {

  const clickHandler = async (e) => {
    e.preventDefault();
    const {peer} = e.target.value;
    console.log(userpeer.value);

  //   try {
  //     const result =  axios.post('http://localhost:3500/addPeer'
  //     ,{
  //       peer:peer.value
  //     })
  //     } catch(e) {
  //       // 빈갑 에러
  //       alert('접속 불량')
  //     }
  // }
  }
  return (
    <div>

      <input type="text" name="peer" placeholder="addpeer"> </input>
      <Button variant="warning" onClick={clickHandler}>miningButton</Button>
    </div>
  )
}

export default AddButton;