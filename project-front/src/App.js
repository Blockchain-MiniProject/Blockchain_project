import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import { Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import MainPage from './page/MainPage';
import BlockPage from './page/BlockPage';
import React from 'react';

function App() {
  return (
    <div>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/block/:id" element={<BlockPage/>}/>
        <Route path="/block/*" element={<MainPage/>}/>
        <Route path="/*" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;