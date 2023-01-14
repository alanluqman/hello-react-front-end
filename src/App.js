/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
