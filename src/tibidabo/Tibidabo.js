import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

class Tibidabo extends Component {
  render() {
    return (
      <div className="neighborhood">
        <h1 className="hola_neighborhood">Hola, Tibidabo!</h1>
        <div className="image_container">
          <img
            src={swing}
            alt="Dancing in front of the Sagrada Familia Cathedral"
            className="hvr-underline-from-center"
          />
          <img
            src={street}
            alt="A slow street in Gracia"
            className="hvr-underline-from-center"
          />
          <img
            src={plaza}
            alt="A roomy plaza in Gracia"
            className="hvr-underline-from-center"
          />
        </div>
        <p>
          Gracia is the hipster neighborhood of Barcelona, far enough away from
          downtown to be populated by Barceloneses and very few tourists. A
          particularly great place to meet new friends in Barcelona is in social
          dance scenes like Swing Maniacs--it's a chance to mingle with the
          Spanish crowd, and dancers are usually extremely friendly and open.
        </p>
        <div className="comments">
          <h2 className="hvr-underline-from-center">Comments</h2>
          <div className="comment_card">
            <h4>Me encanta...</h4>
            <sub>April 15, 2018</sub>
            <p>
              ¡Me encanta bailar Swing! ¡Especialmente durante el verano, cuando
              podemos bailar afuera!
            </p>
          </div>
          <div className="comment_card">
            <h4>¡Venid!</h4>
            <sub>April 14, 2018</sub>
            <p> ¡Venid a Swing Maniacs y podems bailar todo el tiempo! </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Tibidabo
