import React, {useState, useEffect} from 'react'
import axios from "axios"
import MiningButton from '../components/MiningButton'
import PostExample from '../components/PostExample'
import BlockDetail from '../components/BlockDetail'
import BlocksAll from '../components/BlocksAll'
import SearchBar from '../components/SearchBar'


const MainPage = () => {
  const [allData,setAllData] = useState([]);

  const getBlockData = async () => {
    const url = `http://localhost:3500/blocks`;
    const response = await fetch(url)
    const data = await response.json();
    setAllData(data)
  }

  const handleClick = async () => {
    try {
      getBlockData()
      const result = await axios.post('http://localhost:3500/mineBlock', /* data : */ null)
      console.log(result.data)
      setAllData([...allData.reverse(),result.data])
    }catch(e){         //에러감지
      // 비어있을시
      alert('error')
    }
  }

  useEffect(()=>{
    getBlockData()
  },[])

  return (
    <>
      <SearchBar/>
      <MiningButton onClick={handleClick} />
      <BlocksAll allData={allData} />
    </>
  )
}

export default MainPage