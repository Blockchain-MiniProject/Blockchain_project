import React from 'react'
import { Navigate } from 'react-router-dom'
import Mypage from '../page/Mypage'
import SignupPage from '../page/SignupPage'

const PrivateRoute = ({authenticate}) => {
  return (
    authenticate === true? <Mypage/> : <Navigate to ="/login"/>
    // authenticate === false? <SignupPage/> : <Navigate to ="/main"/>
    // 로그인 이되면 회원가입이 => 마이케핑지
  )
}

export default PrivateRoute