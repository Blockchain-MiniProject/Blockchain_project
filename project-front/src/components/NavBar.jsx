import React from 'react'
import { useNavigate } from 'react-router-dom'
import logout from "../img/logout.png"

const NavBar = ({auth, setAuth}) => {
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  const goToMain = () => {
    navigate('/')
  }
  const logOut = () => {
    setAuth(false)
    navigate('/')
  }

  return (
    <div className='nav-bar'>
      {auth === false ? 
        <div className='login-button' onClick={goToLogin}>
            <img
              width={50}
              src="https://cdn-icons-png.flaticon.com/512/2170/2170153.png"
              alt='로그인'
            />
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <h6>로그인</h6>
        </div>
        :
        <div className='logout-button' onClick={logOut} >
            <img
              width={80}
              src={logout}
              alt='로그아웃'
            />
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <h6>로그아웃</h6>
        </div>
      }
      <div className='main-logo' onClick={goToMain}>
        <img
          width={40}
          src="https://cdn-icons-png.flaticon.com/512/1349/1349733.png"
          alt='X'
        />
        <h1>WI BLOCKS</h1>
      </div>
    </div>
  )
}

export default NavBar