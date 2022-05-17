import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  const goToMain = () => {
    navigate('/')
  }

  return (
    <div className='nav-bar'>
      <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
      </div>
      <div className='main-logo' onClick={goToMain}>
        <img
          width={50}
          src="https://cdn-icons-png.flaticon.com/512/1349/1349733.png"
        />
        <div>Block4</div>
      </div>
    </div>
  )
}

export default NavBar