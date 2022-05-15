// block page  블록디테일
import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const BlockDetail = () => {
  // const blockDetailList = ['Index', 'Data', 'TimeStamp', 'Hash', 'PreviousHash', 'Difficulty', 'Nonce']
  let {index} = useParams();
  console.log("index: ", index);

  const [block, setBlock] = useState("");
  const getBlockDetail = async() => {
    let url = `http://localhost:3010/blocks/${index}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data)
    setBlock(data);
    console.log("block: ", block)
  }

  useEffect(() => {
    getBlockDetail()
  }, [])
  
  return ( 
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Block Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='table-td1'>Index</td>
              <td className='table-td2'>{block?.index}</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>{block?.data}</td>
            </tr>
            <tr>
              <td>Timestamp</td>
              <td>{block?.timestamp}</td>
            </tr>
            <tr>
              <td>Hash</td>
              <td>{block?.hash}</td>
            </tr>
            <tr>
              <td>Previous Hash</td>
              <td>{block?.previousHash}</td>
            </tr>
            <tr>
              <td>Difficulty</td>
              <td>{block?.difficulty}</td>
            </tr>
            <tr>
              <td>Nonce</td>
              <td>{block?.nonce}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
  </div>
  )
}

export default BlockDetail