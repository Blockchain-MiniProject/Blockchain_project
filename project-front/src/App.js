import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import { Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import MainPage from './page/MainPage';
import BlockPage from './page/BlockPage';



// route

function App() {
  return (
    <div>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/blcok/:index" element={<BlockPage/>}/>
      </Routes>
    </div>
  );
}

export default App;