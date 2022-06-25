import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return(
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  )
}

export default App;
