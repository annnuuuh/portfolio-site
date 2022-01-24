import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <header>
        <h1>Desert Form Design</h1>
        <Nav />
      </header>
      <Home />
      <Footer />
    </main>
  )
}

export default App;
