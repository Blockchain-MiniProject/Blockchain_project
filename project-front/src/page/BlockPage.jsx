import React from 'react'
import {Container , Row, Col}from 'react-bootstrap';
import BlockDetail from '../components/BlockDetail';
import SearchBar from '../components/SearchBar';



const BlockPage = () => {
  return (
    <div>
        <SearchBar/>
        <BlockDetail />
    </div>
  )
}

export default BlockPage;
