import React, { useContext } from 'react';
import Home from './components/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ user ? <Home/> : <Register/> } /> 
          <Route path="/login" element={ user ? <Navigate to="/"/> :<Login/>} /> 
          <Route path="/register" element={ user ? <Navigate to="/"/> :<Register/>}/> 
          <Route path="/profile/:username" element={ <Profile/> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
