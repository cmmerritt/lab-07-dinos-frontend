import { Component } from 'react';
import DinoForm from './DinoForm.js';
import { addDino } from '../utils/dinos-api.js';
import './DinoEditPage.css';

export default class DinoEditPage extends Component {
  state = {
    error: null
  }

  handleEdit = async dino => {
    try {
      const id = await addDino(dino);
      console.log(id);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
  }

  render() {
    return (
      <div className="DinoEditPage">
        <h2>Add a Dino!</h2>
        <DinoForm onEdit={this.handleEdit}/>
      </div>
    );
  }
}