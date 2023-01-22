import React from 'react';
import Row from './Row';
import request from './request';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
