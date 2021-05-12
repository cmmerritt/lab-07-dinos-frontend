import { Component } from 'react';
import { getDino, deleteDino } from '../utils/dinos-api.js';
import './DinoDetailPage.css';

export default class DinoDetailPage extends Component {
  state = {
    dino: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const dino = await getDino(match.params.id);
      this.setState({ dino: dino });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { dino } = this.state;
    const { history } = this.props;
    const confirmation = `Do you really want to delete ${dino}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading : true });
      await deleteDino(dino.id);
      history.push('/dinos');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading : false });
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

        <button className="delete" onClick={this.handleDelete}>
          Delete This Dino!
        </button>
      </div>
    );
  }
}