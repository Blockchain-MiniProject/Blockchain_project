import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
import {Container , Row, Col}from 'react-bootstrap';

// 1. 블록 해당 정보 값 가져오기
// 2. 블록 그리드 하기
// 3. 해쉬값 클릭하면 해당 해쉬값 사이트로 이동
// 4. 헤잇트 값으로 하기
// 5. 

const BlockAll = () => { 

  const [allData,setAllData] = useState("");
  // const [filteredData,setFilteredData] = useState([]);

  const [qeury,setQeury] = useSearchParams();


  const getBlockData = async () => {
    // let searchQuery = qeury.get("q") || " ";
    // console.log(response.data)
    let url =`http://localhost:3500/blocks` // ${hash}
    let response = await fetch(url)
    let data = await response.json();
    console.log("data"  , data);
    setAllData(data)
  }



  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //       console.log(value);
  //       result = allData.filter((data) => {
  //           return data.title.search(value) != -1;
  //       });
  //       setFilteredData(result);
  // }

  const buttonAxiosget = () => {
    console.log("요청하자")
    axios.get("http://localhost:3010/mineBlock")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      // error
      console.log("error" , err)
    })
  }

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


    // 데이터 가져오기
    useEffect(() =>{
      getBlockData()
    } ,[qeury])


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

  const styles = {
      display:'inline',
      width:'30%',
      height:50,
      float:'left',
      padding:5,
      border:'0.5px solid black',
      marginBottom:10,
      marginRight:10
    } 


  return (
      <div>
        {/* <div style={{ margin: '0 auto', marginTop: '10%' }}>
            <label>Search:</label>
            <input type="text" onChange={(event) =>handleSearch(event)} />
        <button onClick={buttonAxiosget} > axios.get </button> */}
          <Container>
            <Row>
                <Col>해쉬 값</Col>
                <Col>time</Col>
                <Col>hash</Col>
                {/* <div style={{padding:10}}>
                  {filteredData.map((value,index)=>{
                      return(
                          <div key={value.id}>
                              <div style={styles}>
                                  {value.title}
                              </div>
                          </div>
                      )
                  })}
                </div> */}
            </Row>
        </Container>
    </div>
  )
}

export default BlockAll;