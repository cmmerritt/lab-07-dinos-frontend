import { Component } from 'react';
import DinoList from './DinoList';
import { getDinos } from '../utils/dinos-api.js';
import './DinosPage.css';

export default class DinosPage extends Component {
  state = {
    dinos: []
  }

  async componentDidMount() {
    const dinos = await getDinos();
    if (dinos) {
      this.setState({ dinos: dinos });
    }
    else {
      console.log('Clever girl! But no dinos here. Check the network tab. Or the paddock');
    }
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