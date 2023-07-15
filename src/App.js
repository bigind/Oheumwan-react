import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileScreen from './pages/ProfileScreen';
import Community from './pages/Community';
import Home from './pages/Home';


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
