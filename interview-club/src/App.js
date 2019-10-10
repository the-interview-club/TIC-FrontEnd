import React from 'react';
import {Route, Link} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Intro from './components/Intro'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Intro}/>
      <Route exact path='/login' component={LogIn}/>
      <Route exact path='/signup' component={SignUp}/>
    </div>
  );
}

export default App;
