// block page  블록디테일
import React, { useState, useEffect } from 'react'
import { Container, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react';



const BlockDetail = () => {
  let {id} = useParams();
  console.log("id: ", id, typeof id);

  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const [block, setBlock] = useState("");
  const getBlockDetail = async() => {
    let url = `http://localhost:3500/blocks`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ",data);  

    const searchHash = data.find((b) =>  b.hash === id);
    if(Number(id) === 0 || Number(id)) {
      setBlock(data[data.length-id-1])
    } else {
      setBlock(searchHash);
      navigate(`/block/${searchHash.index}`);
    }     
  }

  useEffect(() => {
    getBlockDetail()
  }, [id])

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      click to view this block
    </Tooltip>
  );

  const copyTooltip = (props) => (
    <Tooltip {...props} >
      copied
    </Tooltip>
  );

  const clickH = (index) => {
    // previous hash
    if (index !== -1 ) {
      navigate(`/block/${index}`)
    }
  }

  const changeDate = (timestamp) => {
    const time = Number(block.timestamp) * 1000;
    const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
    console.log("바뀐 시간은 ", date)

    return date
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
              <td>{changeDate()} ({block?.timestamp})</td>              
            </tr>
            <tr>
              <td>Hash</td>
              <td><b>{block?.hash}</b> &nbsp; 
              <OverlayTrigger
                placement="right"
                delay={{ show: 0, hide: 200 }}
                overlay={copyTooltip}
                trigger="click"
                rootClose
                
              >
              <span><FontAwesomeIcon icon={faCopy} style={{cursor:'pointer'}} onClick={CopyHash}/></span>
              </OverlayTrigger>
              </td>
            </tr>
            {
              
            }
            <tr>
              <td>Previous Hash</td>
              <OverlayTrigger
                placement="left"
                delay={{ show: 0, hide: 400 }}
                overlay={renderTooltip}
              >
                <td onClick={() =>clickH(block.index-1)} style={{cursor:'pointer'}}><b>{block?.previousHash}</b></td>
              </OverlayTrigger>
              
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