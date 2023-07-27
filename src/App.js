import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Router from './pages/Router';
import ProfileScreen from './pages/ProfileScreen';
import Community from './pages/Community';
import Home from './pages/Home';
import GetImage from './pages/GetImage';
import EditProfile from './components/EditProfile';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Router/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/profile" element={<ProfileScreen/>}></Route>
         <Route path="/profile/edit" element={<EditProfile/>}></Route>
         <Route path="/community" element={<Community/>}></Route>
         <Route path="/getimage" element={<GetImage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
