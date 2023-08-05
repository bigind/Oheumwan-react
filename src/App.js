import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Router from './pages/Router';
import ProfileScreen from './pages/ProfileScreen';
import Community from './pages/Community';
import Home from './pages/Home';
import GetImage from './pages/imageRecog/GetImage';
import Login from "./pages/login/Login";
import LoginAuth from "./pages/login/LoginAuth";
import Collect from './pages/Inventory/Collect';
import IngredientCheck from './pages/imageRecog/IngredientCheck';
import CameraButton from './pages/CameraButton';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
             <Route path="/" element={<Router/>}></Route>
             <Route path="/home" element={<Home/>}></Route>
             <Route path="/profile" element={<ProfileScreen/>}></Route>
             <Route path="/community" element={<Community/>}></Route>
             <Route path="/getimage" element={<GetImage/>}></Route>
             <Route path="/login" element={<Login/>}></Route>
             <Route path="/auth" element={<LoginAuth/>}></Route>
             <Route path="/collect" element={<Collect/>}></Route>
             <Route path="/check" element={<IngredientCheck/>}></Route>
             <Route path="/camera" element={<CameraButton/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
