import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

      {/*Sidebar */}
      <Sidebar />
      {/* Twitter Feed*/}
      <Feed />
      {/* Widget */}

    </div>
  );
}

export default App;
