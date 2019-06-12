import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio.js';
import Archive from './Archive.js';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component{
   render(){
      return (
         <div className="App">
            <Route path="/archive" component={Archive} />
            <Route path="/bio" component={Bio} />
            <Route exact path="/" component={Home} />
            <Footer />
         </div>
      );
   }
}

export default App;
