import logo from './logo.svg';
import './App.css';
import Link from 'next/link';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
          <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/labs/water-lab">
          <a>Water Lab</a>
        </Link>
      </li>
      <li>
        <Link href="/labs/food-lab">
          <a>Food Lab</a>
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default App;
