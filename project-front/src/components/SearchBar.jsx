import React from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate();
  const search = (e) => {
    if(e.key === "Enter") {
      console.log("pressed this key: ", e.key);
      let keyword = e.target.value;
      console.log("keyword: ", keyword);
      navigate(`/block/${keyword}`);
    }
  }
  
  return (
    <Container className='search-bar'>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Block, hash, transaction, etc..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyPress={(e) => search(e)}
        />
        {/* <Button variant="outline-secondary" id="button-addon2">
          Serach!
        </Button> */}
      </InputGroup>   
    </Container>
  )
}

export default SearchBar