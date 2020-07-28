import React from 'react';
import './App.css'; 
import Restaurants from './Restaurants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Restaurants on Maps! Using zomato, google maps api and bing maps api </p>
      </header>
      <Restaurants />
      <p>my email: sanjay.bharadwaj.j@gmail.com</p>
      <p>linkedIn: www.linkedin.com/in/sanjay-bharadwaj</p>
    </div>
  );
}

export default App;
