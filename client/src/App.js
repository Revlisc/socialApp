import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import './App.css'

const App = () => (
  <BrowserRouter>
    <Container >
      <Navbar />
      <div style={{marginTop: 120 }} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </div>
    </Container>
  </BrowserRouter>
);

export default App;