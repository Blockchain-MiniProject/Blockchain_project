import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const goToSignup = () => {
    navigate('/signup')
  }
  return (
    <div>LoginPage
      <button onClick={goToSignup}>회원가입</button>
    </div>
  )
}

export default LoginPage