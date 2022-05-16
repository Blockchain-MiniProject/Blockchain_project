import React, { useEffect ,useState ,setTimeout } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { Container , Row, Col , Table}from 'react-bootstrap';

// 1. 블록 해당 정보 값 가져오기
// 2. 블록 그리드 하기

// 3. map으로 뽑아보기

// 4. 해쉬값 클릭하면 해당 해쉬값 사이트로 이동

// 5. 어떻게 해야 버튼을 누르고 바로 데이터가 생길지?
// 5_1. 데이터가 최신순으로 정열할지?
// 6. 



// 생각 정리하기
// 1. 데이터 일단 가져 와보기


const BlockAll = () => { 

  // let {hash} = useParams();

  // 초기값 배열값으로 줘야 map 함수 , 배열로 하면 안된다.
  const [allData,setAllData] = useState([]);

  // const [qeury,setQeury] = useSearchParams();


  const getBlockData = async () => {
    // let searchQuery = qeury.get("q") || " ";
    // console.log(response.data)
    // let url =`http://localhost:3500/blocks` // ${hash}
    let url = `http://localhost:3010/blocks`;
    let response = await fetch(url)
    let data = await response.json();
    console.log("data123123"  , data);
    console.log("block 123123" , allData );
    setAllData(data)
  }


  // 렌더링 할때 바로 추가, 바뀔때마다 리 렌더링, 배열을
  // 데이터가 같을때 다시 렌더링 안되게 해야한다.
  
  // 참조롤 
  useEffect(() => {
    getBlockData()
  },[])

  return (
      <div>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">시은</th>
                  <th scope="col">timestamp</th>
                  <th scope="col">Hash</th>
                </tr>
              </thead>
            <tbody>
                {allData.map((data,index) => {
                  return     <tr>
                                <th scope="row">{data.index}</th>
                                <td>{data.data}</td>
                                <td>{data.timestamp}</td>
                                <td>{data.hash}</td>
                              </tr>
            
                })}
             </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default BlockAll;








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
