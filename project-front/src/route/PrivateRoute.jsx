import React from 'react'
import { Navigate } from 'react-router-dom'
import Mypage from '../page/Mypage'

const PrivateRoute = ({authenticate}) => {
  return (
    authenticate === true? <Mypage/> : <Navigate to ="/login"/>
  )
}

export default PrivateRoute