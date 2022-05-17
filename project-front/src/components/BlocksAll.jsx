import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Table}from 'react-bootstrap';


const BlockAll = ({allData}) => { 
  const navigate = useNavigate();

  const searchHash = (index) => {
    console.log(index)

    // console.log("asdfasdf" , allData.index[])
    navigate(`/block/${index}`)
  }

  // 참조롤 
  // useEffect(() => {
  //   getBlockData()
  // },[])

  return (
    <Container className='block-data'>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Data</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Hash</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data,index) => {
            const time = Number(data.timestamp)*1000;
            const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
            //console.log(date);
            return     <tr key={index}>
                          <th scope="row">{data.index}</th>
                          <td>{data.data}</td>
                          <td>{date}</td>
                          {/* <td>{() => timeStamp(data.timestamp)}</td> */}
                          {/* 실행구문이 있어서 */}
                          <td className='block-hash' onClick={()=>{searchHash(data.index)}}><b>{data.hash}</b></td>
                        </tr>            
          })}
        </tbody>
      </Table>
  </Container>
  )
}

export default BlockAll;