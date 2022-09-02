import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/header/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)
