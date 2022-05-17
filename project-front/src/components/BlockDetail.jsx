// block page  블록디테일
import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'

const BlockDetail = () => {
  let {id} = useParams();
  console.log("id: ", id, typeof id);

  const navigate = useNavigate();

  const [block, setBlock] = useState("");
  const getBlockDetail = async() => {
    let url = `http://localhost:3500/blocks`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data);

    // const time = Number(data.timestamp)*1000;
    // const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
    // console.log(date);

    const searchHash = data.find((b) =>  b.hash === id);
    if(Number(id) === 0 || Number(id)) {
      setBlock(data[data.length-id-1])
    } else {
      setBlock(searchHash);
      navigate(`/block/${searchHash.index}`);
    }     
    // console.log("block: ", block)
  }

  useEffect(() => {
    getBlockDetail()
  }, [id])

  const clickH = (index) => {
    // previous hash
    if (index !== -1 ) {
      navigate(`/block/${index}`)
    }
  }

  const CopyHash = () => {
    console.log(block.hash);
    navigator.clipboard.writeText(block.hash)
  };
  
  return (
    <>
    {block?
      <Container className='block-detail'>
        <Table striped bordered hover responsive="lg">
          <thead>
            <tr>
              <th lg={2}></th>
              <th lg={10}>Block Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Index</td>
              <td>{block?.index}</td>
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
              <td><b>{block?.hash}</b> &nbsp; <FontAwesomeIcon icon={faCopy} onClick={CopyHash}/></td>
            </tr>
            <tr>
              <td>Previous Hash</td>
              <td onClick={() =>clickH(block.index-1)}>{block?.previousHash}</td>
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
  : <Container><h1>블록 정보 없음</h1></Container>}
  </>
  )
}

export default BlockDetail;