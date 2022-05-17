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
    <div>
      <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
      </div>
      <div className='nav-section' onClick={goToMain}>
        <img
          width={100}
          src=""
        />
      </div>
    </div>
  )
}

export default NavBar