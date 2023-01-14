/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
