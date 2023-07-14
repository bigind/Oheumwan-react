import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileScreen from './board/ProfileScreen';
import Community from './board/Community';
import Home from './board/Home';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/profile" element={<ProfileScreen/>}></Route>
         <Route path="/community" element={<Community/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
