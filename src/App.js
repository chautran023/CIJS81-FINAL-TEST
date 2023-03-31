import logo from './logo.svg';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather.js';
import {Routes, Route, NavLink} from 'react-router-dom';
function App() {
  
  return (
        <div className="App">
        <Weather />
        </div>
    );

}

export default App;
