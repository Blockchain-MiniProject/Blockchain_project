// block page  블록디테일
import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

const BlockDetail = () => {
  // const blockDetailList = ['Index', 'Data', 'TimeStamp', 'Hash', 'PreviousHash', 'Difficulty', 'Nonce']
  let {id} = useParams();
  console.log("id: ", id, typeof id);

  const navigate = useNavigate();

  const [block, setBlock] = useState(null);
  const getBlockDetail = async() => {
    let url = `http://localhost:3010/blocks`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data);

    //
    const searchHash = data.find((b) =>  b.hash === id);
    if(Number(id) === 0 || Number(id)) {
      setBlock(data[id])
    } else {
      setBlock(searchHash);
      navigate(`/block/${searchHash.index}`);
    }     
    // console.log("block: ", block)
  }

  useEffect(() => {
    getBlockDetail()
  }, [id])
  
  return (
    <>
    {block?
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
  : <h1>블록 정보 없음 test</h1>}
  </>
  )
}

export default BlockDetail