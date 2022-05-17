import React from 'react'
import { Button } from 'react-bootstrap';

const AddButton = () => {
  const clickHandler = async (e) => {
    e.preventDefault();
    const {peer} = e.target.value;
    console.log(userpeer.value);
  }

  return (
    <div>
      <input type="text" name="peer" placeholder="addpeer"> </input>
      <Button variant="warning" onClick={clickHandler}>miningButton</Button>
    </div>
  )
}

export default AddButton;