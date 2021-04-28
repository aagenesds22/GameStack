import React from 'react';
import {Route} from 'react-router-dom';
import JetBrains from './assets/fonts/jetbrains';
import VideogamesGrid from './Components/Videogames.jsx';
import Videogame from './Components/Videogame.jsx';
import AddVideogames from './Components/AddVideogames';
import Home from './Components/Home.jsx';
import './App.css';

function App() {



  return (
    <>
    <JetBrains />
      <Route exact path='/create_game' component={AddVideogames} />
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={VideogamesGrid}/>
      <Route exact path='/game/:id' component={Videogame} />
    </>
  );
}

export default App;
