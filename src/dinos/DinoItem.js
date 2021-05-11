import React, { Component } from 'react';
import './DinoItem.css';

class DinoItem extends Component {

  render() {
    const dino = this.props.dino;

    return (
      <li className="DinoItem">
        <h2>{dino.name}</h2>
        <img src={dino.url} alt={dino.name}/>
        <p>Lived during the {dino.era} Era</p>
      </li>
    );
  }
}

export default DinoItem;