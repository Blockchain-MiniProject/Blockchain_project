import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import { Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import MainPage from './page/MainPage';
import BlockPage from './page/BlockPage';
import React from 'react';

<<<<<<< HEAD
=======


>>>>>>> ebbadb7 (adsf)
function App() {
  return (
    <div>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
<<<<<<< HEAD
        <Route path="/block/:index" element={<BlockPage/>}/>
        <Route path="/block/*" element={<MainPage/>}/>
        <Route path="/*" element={<MainPage/>} />
=======
        <Route path="/blcok:index" element={<BlockPage/>}/>
>>>>>>> ebbadb7 (adsf)
      </Routes>
    </div>
  );
}

export default App;