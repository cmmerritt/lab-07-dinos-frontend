import { Component } from 'react';
import { getDino } from '../utils/dinos-api.js';
import './DinoDetailPage.css';

export default class DinoDetailPage extends Component {
  state = {
    dino: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const dino = await getDino(match.params.id);
    if (dino) {
      this.setState({ dino: dino });
    }
    else {
      console.log('No dino received. Check id and network tab');
    }
  }

  render() {

    const { dino } = this.state;
    console.log(dino);
    if (!dino) return null;

    return (
      <div className="DinoDetail">
        <h2>Dino Detail Page</h2>

        <p>Dino name: {dino.name}</p>
        <p>Dino era: {dino.era}</p>
        <p>Dino order: {dino.dinorder}</p>
      </div>
    );
  }
}