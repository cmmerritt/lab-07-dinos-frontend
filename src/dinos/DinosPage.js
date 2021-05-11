import { Component } from 'react';
import DinoList from './DinoList';
import './DinosPage.css';

export default class DinosPage extends Component {
  state = {
    dinos: []
  }


  render() {
    const { dinos } = this.state;

    return (
      <div className="DinosPage">
        <h2>Dino List</h2>

        <DinoList dinos={dinos}/>

      </div>
    );
  }
}