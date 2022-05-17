import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Table}from 'react-bootstrap';


const BlockAll = ({allData}) => { 

  // let {hash} = useParams();
  const navigate = useNavigate();

  // 초기값 배열값으로 줘야 map 함수 , 배열로 하면 안된다.
  // const [allData,setAllData] = useState([]);

  // const getBlockData = async (data1) => {
  //   let url = `http://localhost:3500/blocks`;
  //   let response = await fetch(url)
  //   let data = await response.json();
  //   console.log("data123123"  , data);
  //   console.log("block 123123" , allData );
  //   setAllData(data)

  //   console.log("data: ",data[5]);

  //   const click = () => {
  //     navigate(`/block/${data[5]}`)
  //   }

  // }


  const searchHash = (index) => {
    // console.log(data)
    console.log(index)
    // e.target.value

    // console.log("asdfasdf" , allData.index[])
    navigate(`/block/${index}`)
    // navigate(`/block/1`)
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


// 클릭한 해쉬에 값에 id를 해쉬값으로 가져오기

 // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //       console.log(value);
  //       result = allData.filter((data) => {
  //           return data.title.search(value) != -1;
  //       });
  //       setFilteredData(result);
  // }

  // const buttonAxiosget = () => {
  //   console.log("요청하자")
  //   axios.get("http://localhost:3010/mineBlock")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     // error
  //     console.log("error" , err)
  //   })
  // }


  // const getBlock = async () => {
  //   let searchQuery = qeury.get("q") || " ";
  //   console.log("쿼리값은?",searchQuery)
  //   // todo
  //   let url = `http://localhost:3010/block?q= `; //${searchQuery}
  //   let response =  await fetch(url);
  //   let data = await response.json();
  //   console.log(data)
  //   setFilteredData(data)
  // }

  // 데이터 mine 블록 데이터 가져오는거 연습
  // useEffect(() => {
  //   axios.get(`http://localhost:3500/mineBlock`)
  //   .then(response => {
  //     console.log(response.data)
  //     setAllData(response.data);
  //     setFilteredData(response.data);
  //   }).catch((error) => {
  //       console.log('데이터 가져오기 : ' + error);
  //   })
  // }, []);

{/* <div style={{ margin: '0 auto', marginTop: '10%' }}>
            <label>Search:</label>
            <input type="text" onChange={(event) =>handleSearch(event)} />
<button onClick={buttonAxiosget} > axios.get </button> */ }
                //         <div style={{padding:10}}>
                //   {filteredData.map((value,index)=>{
                //       return(
                //           <div key={value.id}>
                //               <div style={styles}>
                //                   {value.title}
                //               </div>
                //           </div>
                //       )
                //   })}
                // </div> 
