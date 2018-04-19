import React, { Component } from 'react'
import './Map.css'
import { Link, Route, Switch } from 'react-router-dom'
import map from '../images/barcelona-tourist-map.jpg'
import Barceloneta from '../barceloneta/Barceloneta'
import Laberinto from '../laberinto/Laberinto'
import Plazaespanya from '../plazaespanya/Plazaespanya'
import Tibidabo from '../tibidabo/Tibidabo'
import Parcguell from '../parcguell/Parcguell'
import Poblesec from '../poblesec/Poblesec'
import Montjuic from '../montjuic/Montjuic'
import Sanantoni from '../sanantoni/Sanantoni'
import Gracia from '../gracia/Gracia'
import Vila from '../vila/Vila'
import Gotico from '../gotico/Gotico'
// import Gracia from '../gracia/Gracia'

class Map extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={map} alt="A map of Barcelona Neighborhoods" alt="A map of Barcelona Neighborhoods." className="map" /> */}
        <div className="area">
          <Link to="/gotico">
            <div className="clickable" id="gotico" />
          </Link>
          <Link to="/vila">
            <div className="clickable" id="vila" />
          </Link>
          <Link to="/gracia">
            <div className="clickable" id="gracia" />
          </Link>
          <Link to="/montjuic">
            <div className="clickable" id="montjuic" />
          </Link>
          <Link to="/laberinto">
            <div className="clickable" id="laberinto" />
          </Link>
          <Link to="/barceloneta">
            <div className="clickable" id="barceloneta" />
          </Link>
          <Link to="/poblesec">
            <div className="clickable" id="poblesec" />
          </Link>
          <Link to="/sanantoni">
            <div className="clickable" id="sanantoni" />
          </Link>
          <Link to="/plazaespanya">
            <div className="clickable" id="plazaespanya" />
          </Link>
          <Link to="/tibidabo">
            <div className="clickable" id="tibidabo" />
          </Link>
          <Link to="/parcguell">
            <div className="clickable" id="parcguell" />
          </Link>
        </div>

        <Route path="/barceloneta" component={Barceloneta} />
        <Route path="/laberinto" component={Laberinto} />
        <Route path="/montjuic" component={Montjuic} />
        <Route path="/poblesec" component={Poblesec} />
        <Route path="/sanantoni" component={Sanantoni} />
        <Route path="/gracia" component={Gracia} />
        <Route path="/vila" component={Vila} />
        <Route path="/gotico" component={Gotico} />
        <Route path="/plazaespanya" component={Plazaespanya} />
        <Route path="/tibidabo" component={Tibidabo} />
        <Route path="/parcguell" component={Parcguell} />
      </div>
    )
  }
}

export default Map
