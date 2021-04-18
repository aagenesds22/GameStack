import React from 'react';
import {Route} from 'react-router-dom';
import VideogamesGrid from './Components/Videogames.jsx';
import Videogame from './Components/Videogame.jsx';
import Home from './Components/Home.jsx';
import './App.css';

function App() {



  return (
    <>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={VideogamesGrid}/>
      <Route exact path='/game/:id' component={Videogame} />
    </>
  );
}

export default App;
