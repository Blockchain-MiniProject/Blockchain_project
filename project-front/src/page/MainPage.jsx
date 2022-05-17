import React from 'react'
import MiningButton from '../components/MiningButton'
import PostExample from '../components/PostExample'
import BlockDetail from '../components/BlockDetail'
import BlocksAll from '../components/BlocksAll'
import SearchBar from '../components/SearchBar'


const MainPage = () => {


  return (
    <>
      <SearchBar/>
      <MiningButton/>
      <BlocksAll/>
      {/* <PostExample/> */}


      {/* 지울거임 */}
      {/* <BlockDetail/> */}
    </>
  )
}

export default MainPage