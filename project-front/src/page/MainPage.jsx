import React, { useState , useEffect } from 'react'
import MiningButton from '../components/MiningButton'
import BlocksAll from '../components/BlocksAll'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

// 1. authenticate 를 이용해서 해결해보기 사이트 이동 해보기
// 2. 

const MainPage = ({authenticate}) => {


  const [allData,setAllData] = useState([]);

  const getBlockData = async () => {
    const url = `http://localhost:3500/blocks`;
    const response = await fetch(url)
    const data = await response.json();
    setAllData(data)
  }

  const handleClick = async () => {
    const id = localStorage.getItem("id")
    const address = localStorage.getItem("address")
    try {
      getBlockData()
      const result = await axios.post('http://localhost:3500/mineBlock', /* data : */ {id,address} )
      console.log(result.data)
      setAllData([result.data,...allData])
    }catch(e){         //에러감지
      // 비어있을시
      alert('error')
    }
  }

  useEffect(()=>{
    getBlockData()
    // axios.post("http://localhost:3500/addPeer",{peer:"49.50.172.129"})
  },[])

  return (
    <>
      <SearchBar/>
      {
        authenticate
        ?<MiningButton onClick={handleClick} />
        :""
      }
      <BlocksAll allData={allData} />
    </>
  )
}

export default MainPage