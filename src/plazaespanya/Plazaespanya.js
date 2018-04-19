import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import sardana from '/Users/hannahaurand/wdi/projects/project_4/NEW_FRONT_END/new-barcelona-fend/src/images/sardana-4456.jpg'
import plaza from '/Users/hannahaurand/wdi/projects/project_4/NEW_FRONT_END/new-barcelona-fend/src/images/plazadespanya.jpg'
import dance from '/Users/hannahaurand/wdi/projects/project_4/NEW_FRONT_END/new-barcelona-fend/src/images/pespanyadance.jpg'

class Plazaespanya extends Component {
  render() {
    return (
      <div className="neighborhood">
        <h1 className="hola_neighborhood">Hola, Plaza Espanya!</h1>
        <div className="image_container">
          <img src={sardana} alt="Dancing Sardana" />
          <img src={plaza} alt="Plaza de Espanya" />
          <img
            src={dance}
            alt="Dance with strangers in the plaza de Espanya."
          />
        </div>
        <p>
          Plaza Espanya holds events throughout the year. Sunday usually sees it
          buzzing with locals and tourists alike. On certain Sundays, you can
          learn the traditional Catalunyan dance Sardana, somewhat like contra
          dancing, in the plaza. A great place to people watch, hang out with
          friends, and pass a lazy Sunday afternoon. People in Spain don't tend
          to sit on the ground, so it's best to sit on a bench or ledge if you
          can find one. If you sit on the ground, people may wonder if you are
          ill or homeless.
        </p>
        <div className="comments">
          <h2 className="hvr-underline-from-center">Comments</h2>
          <div className="comment_card">
            <h4>Me gusta</h4>
            <sub>April 15, 2018</sub>
            <p>Totalmente divertido! Super guay!</p>
          </div>
          <div className="comment_card">
            <h4>The church is beautiful</h4>
            <sub>April 14, 2018</sub>
            <p>Sometimes people dance here, it's cool.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Plazaespanya
