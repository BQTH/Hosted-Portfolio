import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './js/img.js'
import Home from './pages/Home'
import Designs from './pages/Designs'
import Photos from './pages/Photos'
import Nav from './components/nav/nav'
import Schoolcord from './pages/projectpages/Schoolcord'
import Krs from './pages/projectpages/Krs'
import Nrgphotos from './pages/projectpages/Nrgphotos'
import Smartsmoker from './pages/projectpages/Smartsmoker'
import Nachtwakers from './pages/projectpages/Nachtwakers'
import Walker from './pages/projectpages/Walker'

function App() {
  return (
    <div className="App">
     
     <div className="content">
       <Router>
       <Nav/>
          <Switch>
              <Route path="/" exact component={Home} />   
              <Route path="/designs" component={Designs} />  
              <Route path="/photos" component={Photos} />    
              <Route path="/schoolcord" component={Schoolcord} /> 
              <Route path="/krs" component={Krs} /> 
              <Route path="/nrg photos" component={Nrgphotos} /> 
              <Route path="/smartsmoker" component={Smartsmoker} />
              <Route path="/nachtwakers" component={Nachtwakers} />
              <Route path="/walker" component={Walker} />
          </Switch>
        </Router>
        </div>
    </div>
  );
}

export default App;
