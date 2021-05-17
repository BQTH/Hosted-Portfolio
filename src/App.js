import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Designs from './pages/Designs'
import Photos from './pages/Photos'
import Nav from './components/nav/nav'
import Schoolcord from './pages/projectpages/Schoolcord'
import Krs from './pages/projectpages/Krs'
import Nrgphotos from './pages/projectpages/Nrgphotos'

function App() {
  return (
    <div className="App">
     <Nav/>
     <div className="content">
       <Router>
          <Switch>
              <Route path="/" exact component={Home} />   
              <Route path="/designs" exact component={Designs} />  
              <Route path="/photos" exact component={Photos} />    
              <Route path="/SCHOOLCORD" exact component={Schoolcord} /> 
              <Route path="/KRS" exact component={Krs} /> 
              <Route path="/NRG PHOTOS" exact component={Nrgphotos} /> 
          </Switch>
        </Router>
        </div>
    </div>
  );
}

export default App;
