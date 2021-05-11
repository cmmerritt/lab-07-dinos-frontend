import { Component } from 'react';
import './DinoForm.css';

export default class DinoForm extends Component {
  state = {
    name: '',
    dinorder: '',
    diet: '',
    region: '',
    era: '',
    url: '',
    specimensFound: 0
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onEdit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeDinorder = ({ target }) => {
    this.setState({ dinorder: target.value });
  }

  handleChangeDiet = ({ target }) => {
    this.setState({ diet: target.value });
  }

  handleChangeRegion = ({ target }) => {
    this.setState({ region: target.value });
  }

  handleChangeEra = ({ target }) => {
    this.setState({ era: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleChangeSpecimensFound = ({ target }) => {
    this.setState({ specimensFound: target.value });
  }

  render() {
    const { name, dinorder, diet, region, era, url, specimensFound } = this.state;
    console.log(this.state);

    return (
      <form className="DinoForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Dino Name</span>
            <input name="name" required placeholder="Dino name..." value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Dino Order</span>
            <select name="dinorder" required placeholder="Dino order..." value={dinorder} onChange={this.handleChangeDinorder}>
              <option value="" disabled>Order</option>
              <option>Saurischian</option>
              <option>Ornithischian</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Dino Diet</span>
            <select name="diet" required placeholder="Dino diet..." value={diet} onChange={this.handleChangeDiet}>
              <option value="" disabled>Order</option>
              <option>Herbivore</option>
              <option>Carnivore</option>
              <option>Omnivore</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Dino Region</span>
            <input name="region" required placeholder="Dino region..." value={region} onChange={this.handleChangeRegion}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Dino Era </span>
            <select name="era" required placeholder="Dino era..." value={era} onChange={this.handleChangeEra}>
              <option value="" disabled>Order</option>
              <option>Triassic</option>
              <option>Jurassic</option>
              <option>Cretaceous</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Dino Image Url</span>
            <input name="url" required placeholder="Url to image of dino"
              value={url} onChange={this.handleChangeUrl} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Specimens Found</span>
            <input name="specimensFound" required
              title="Should be an integer"
              placeholder="Enter an integer"
              value={specimensFound} onChange={this.handleChangeSpecimensFound} 
            />
          </label>
        </p>

        <p>
          <button>Add Dino</button>
        </p>

      </form>
    );
  }
}