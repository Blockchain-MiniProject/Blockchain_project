import React from 'react'
import MiningButton from '../components/MiningButton'
import PostExample from '../components/PostExample'
import BlockDetail from '../components/BlockDetail'


const MainPage = () => {


  return (
    <>
      <MiningButton/>
      <PostExample/>

      {/* 지울거임 */}
      <BlockDetail/>
    </>
  )
}

export default MainPage