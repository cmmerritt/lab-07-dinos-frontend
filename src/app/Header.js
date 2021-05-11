import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Diggin' Dinos</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dinos">Dinos</NavLink>
          <NavLink to="/dinos/add">Add a Dino</NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;