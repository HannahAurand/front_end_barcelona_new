import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import mojito from '/Users/hannahaurand/wdi/projects/project_4/NEW_FRONT_END/new-barcelona-fend/src/images/barceloneta_mojitos.jpg'
import barceloneta from '/Users/hannahaurand/wdi/projects/project_4/NEW_FRONT_END/new-barcelona-fend/src/images/barceloneta.jpg'
import opium from '/Users/hannahaurand/wdi/projects/project_4/NEW_FRONT_END/new-barcelona-fend/src/images/opium-barcelona-e1511262864288.jpg'
class Barceloneta extends Component {
  render() {
    return (
      <div className="neighborhood">
        <h1 className="hola_neighborhood">Hola, Barceloneta!</h1>
        <div className="image_container">
          <img src={mojito} alt="Dancing Sardana" />
          <img src={barceloneta} alt="Plaza de Espanya" />
          <img
            src={opium}
            alt="Dance with strangers in the plaza de Espanya."
          />
        </div>
        <p>
          Barceloneta is the place to be for tourists. If you would like to go
          to a beach that more locals frequent, just keep walking from the metro
          as far as you can go. The closer you are to the metro stop
          Barceloneta, the more touristy it will be. People will illegally sell
          mojitos on this beach for 5 euros. If the police come by, they hide
          their drinks and become scarce very quickly. Women will also offer
          massages, but it's all against the law. Don't buy things on the beach,
          especially massages. They can be persistent, though, so you have to be
          ready to say no. Just say no. It's a scheme to get close to you to
          find your wallet/purse, etc. This is also where the tourist-trap night
          clubs are. If that's your scene, go for it, but it's just a smokey
          crowd.
        </p>
        <div className="comments">
          <h2 className="hvr-underline-from-center">Comments</h2>
          <div className="comment_card">
            <h4>Too much skin man</h4>
            <sub>April 15, 2018</sub>
            <p>
              Nice beach, lots of Scandinavian snow birds sitting here naked in
              60 degree weather...talk about tan lines.
            </p>
          </div>
          <div className="comment_card">
            <h4>Sand in places it shouldn't be</h4>
            <sub>April 14, 2018</sub>
            <p>Blegh, the mediterranean ocean. So blue and salty.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Barceloneta
