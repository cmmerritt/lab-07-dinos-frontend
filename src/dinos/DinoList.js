import React, { Component } from 'react';
import DinoItem from './DinoItem';
import './DinoList.css';

class DinoList extends Component {

  render() {
    const { dinos } = this.props;

    return (
      <ul className="DinoList">
        {dinos.map(dino => (
          <DinoItem key={dino.id} dino={dino}/>
        ))}
      </ul>
    );
  }
}

export default DinoList;