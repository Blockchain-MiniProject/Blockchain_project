import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from './page/MainPage';
import BlockPage from './page/BlockPage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import PrivateRoute from './route/PrivateRoute';
import NavBar from './components/NavBar';

function App() {
  const [authenticate, setAuthenticate] = useState(false) //true면 로그인, false면 로그인 안됨

  useEffect(()=>{console.log("authenticate : ", authenticate)},[authenticate])
  return (
    <div className='body'>
      <NavBar auth={authenticate} setAuth={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<MainPage authenticate={authenticate} />}/>
        <Route path="/block/:id" element={<BlockPage/>}/>
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate}/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/mypage/" element={<PrivateRoute authenticate={authenticate}/>}/>
        <Route path="/*" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;