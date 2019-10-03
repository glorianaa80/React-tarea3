import React from 'react';
import './App.css';
import Episodes from './api';
// import  Title from './components/title'
// import Image from './components/image'




function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1 className="title" >Rick and Morty</h1>
        <p className="desc">Rick is a mentally gifted, but sociopathic and alcoholic scientist and a
          grandfather to Morty; an awkward, impressionable, and somewhat spineless
          teenage boy. Rick moves into the family home of Morty, where he immediately
          becomes a bad influence.</p>
      </header>
      <Episodes/>
    </div>
  );
}
export default App;
