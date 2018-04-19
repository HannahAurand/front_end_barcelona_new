import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import tibidabo from '../images/tibidabo.jpg'
import hacia from '../images/tibidabo-1.jpg'
import amusement from '../images/tibidabo-amusement.jpg'

class Tibidabo extends Component {
  render() {
    return (
      <div className="neighborhood">
        <h1 className="hola_neighborhood">Hola, Tibidabo!</h1>
        <div className="image_container">
          <img
            src={tibidabo}
            alt="Tibidabo--a cathedral at the top of a hill in barcelona"
          />
          <img src={hacia} alt="The city sits between Tibidabo and el mar" />
          <img
            src={amusement}
            alt="Tibidabo has an amusement park on the top of the hill."
          />
        </div>
        <p>
          In Barcelona, you don't need to know cardinal directions. The city is
          built on a hill, and rests between Tibidabo (a church and amusement
          park) at the top of the hill, and the ocean at the bottom. When asking
          for directions in the city, people will say, "go toward Tibidabo," or
          "go toward el mar." You go "up" toward Tibidabo and "down" toward el
          mar. On a side note, "blocks" are called "manzanas" in Barcelona. If
          someone is telling you to walk "5 manzanas hacia Tibidabo"--they don't
          literally mean, "5 apples toward Tibidabo." They mean "5 blocks in
          Tibidabo's direction"
        </p>
        <div className="comments">
          <h2 className="hvr-underline-from-center">Comments</h2>
          <div className="comment_card">
            <h4>Pricey...</h4>
            <sub>April 15, 2018</sub>
            <p>
              The amusement park is really fun but super overpriced! Total
              tourist trap!
            </p>
          </div>
          <div className="comment_card">
            <h4>The church is beautiful</h4>
            <sub>April 14, 2018</sub>
            <p>
              {' '}
              Too many tourists. Super noisy. But GREAT view! Definitely go
              during off-peak hours early in the morning if you want less
              tourists around.{' '}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Tibidabo
