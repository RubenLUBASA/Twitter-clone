import React from 'react';
import './App.css';
import Timeline from './Timeline';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Iconlike from './Iconlike';

function App() {
  return (
    <div className="app">
    <Sidebar />

    <Timeline />

    <Widget />
    <Iconlike />
    </div>
  
  );
}

export default App;
