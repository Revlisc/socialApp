import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <div style={{marginTop: 120}} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      </div>
    </Container>
  </BrowserRouter>
);

export default App;