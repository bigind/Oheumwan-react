import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileScreen from './board/ProfileScreen';
import Board from './board/Board';
import Community from './board/Community';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Board/>}></Route>
         <Route path="/profile" element={<ProfileScreen/>}></Route>
         <Route path="/community" element={<Community/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
