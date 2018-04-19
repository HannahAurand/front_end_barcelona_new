import React, { Component } from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
import map from './images/barcelona-tourist-map.jpg'
import Map from './map/Map'
import self from './images/Screen Shot 2018-04-19 at 1.47.46 PM.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="secret_gull">
          <p>Full confession: this is a Roman Sea-gull...not Spanish.</p>
        </div>
        <header>
          <h5>A guide to avoid the tourist traps</h5>
        </header>
        <h1 id="h1thing">¡A Barcelona!</h1>
        <div className="topContainer">
          <div className="author">
            <h3> Sobre Yo </h3>
            <img
              src={self}
              alt="picture of author and seagull"
              className="self"
            />
            <p>
              Viajé a Barcelona en 2015. Me encataba vivir en una ciudad tan
              internacional, con un sistema de transporte público gigante.
              Siempre paseaba las calles sola para tener capaz de mirar todo sin
              apuro. La oportunidad de viajar al extranjero es un regalo, porque
              aprendes tanto de otros países, y también, tanto sobre sí misma.
            </p>
          </div>
          <div className="mapContainer">
            <Map />
          </div>
        </div>
      </div>
    )
  }
}

export default App
