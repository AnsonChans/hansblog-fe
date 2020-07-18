import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">index</Link>
      <Link to="/123">123</Link>
    </div>
  );
}

export default App;
