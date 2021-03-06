import React from 'react';
import './App.css';
import './css/header.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import JobView from './JobView/JobView';
import NotFound from './NotFound/NotFound';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import JobForm from './JobForm/JobForm';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Logout from './Auth/Logout';
import Notice from "./Notice/Notice";
import MyProfile from "./Profile/MyProfile";
import Profile from "./Profile/Profile";

// const axios = require('axios').default;

const App = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notice-board/:username' element={<ProtectedRoute>< NoticeBoard /></ProtectedRoute>} />
        <Route path='/notice' element={<ProtectedRoute>< Notice /></ProtectedRoute>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/jobform' element={<ProtectedRoute><JobForm /></ProtectedRoute>} />
        <Route path='/jobview' element={<ProtectedRoute><JobView /></ProtectedRoute>} />
        <Route path='/my-profile' element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path='/profile/:username' element={<ProtectedRoute>< Profile /></ProtectedRoute>} />
        <Route path='/*' element={<NotFound/>} />
        
      </Routes>
    </Router>
  );
  

}

export default App;
