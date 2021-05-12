import { Component } from 'react';
import DinoForm from './DinoForm.js';
import { addDino } from '../utils/dinos-api.js';
import './DinoAddPage.css';

export default class DinoAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async dinoToAdd => {
    const { history } = this.props;
    try {
      this.setState({ loading: true });
      const newDino = await addDino(dinoToAdd);
      console.log(newDino);
      history.push(`/dinos/${newDino.id}`);
      
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="DinoAddPage">
        <h2>Add a Dino!</h2>
        <DinoForm onSubmit={this.handleAdd}/>
      </div>
    );
  }
}