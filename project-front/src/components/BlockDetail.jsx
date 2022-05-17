// block page  블록디테일
import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'

const BlockDetail = () => {
  // const blockDetailList = ['Index', 'Data', 'TimeStamp', 'Hash', 'PreviousHash', 'Difficulty', 'Nonce']
  let {id} = useParams();
  console.log("id: ", id, typeof id);

  const navigate = useNavigate();

  const [block, setBlock] = useState("");
  const getBlockDetail = async() => {
    let url = `http://localhost:3500/blocks`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data);

    //
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
  
    navigator.clipboard.writeText(block.hash)/* .then(() => {
      ToastsPop()
    }) */;
  };
  
  return (
    <>
    {block?
      <Container className='block-detail'>
        <Table striped bordered hover >
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