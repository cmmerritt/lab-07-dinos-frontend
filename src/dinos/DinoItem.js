import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DinoItem.css';

class DinoItem extends Component {

  render() {
    const dino = this.props.dino;

    return (
      <li className="DinoItem">
        <Link to={`dinos/${dino.id}`}>
          <h2>{dino.name}</h2>
          <img src={dino.url} alt={dino.name}/>
          <p>Lived during the {dino.era} Era</p>
        </Link>
      </li>
    );
  }
}

export default DinoItem;