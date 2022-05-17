import React from 'react'
import { useNavigate } from 'react-router-dom'
import logout from "../img/logout.png"
import user from "../img/user.png"

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
    localStorage.removeItem("address")
    localStorage.removeItem("id")
  }
  const goToMypage = () => {
    navigate('/mypage')
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
            <h6>로그인</h6>
        </div>
        :
        <div className='logout-button'>
          <div className='mypage-button' onClick={goToMypage}>  
            <img
              width={50}
              src={user}
            />
            <h6>내정보</h6>
          </div>
          <div onClick={logOut}>
            <img
              width={80}
              src={logout}
              alt='로그아웃'
            />
            <h6>로그아웃</h6>
          </div>  
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