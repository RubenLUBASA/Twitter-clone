import React from 'react';
import './App.css';
import Timeline from './Timeline';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
  return (
    <div className="app">
    <Sidebar />

    <Timeline />

    <Widget />
    </div>
  
  );
}

export default App;
