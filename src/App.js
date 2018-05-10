import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bicing} from './assets/bicing';
import {BicingStation} from './components/BicingStation';

class App extends Component {

    constructor(props){
        super(props);
        this.bicingjson = bicing;
        // debugger;


    }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Servicio Bicing</h1>
              </header>
              <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <ul>
                  { this.bicingjson.stations.map(s=><BicingStation id={s.id} streetName={s.streetName}/>)}
              </ul>
          </div>
      );
      console.log(bicing);
  }
}

export default App;
