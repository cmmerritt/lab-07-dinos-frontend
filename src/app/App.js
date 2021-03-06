import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import DinosPage from '../dinos/DinosPage.js';
import DinoDetailPage from '../dino/DinoDetailPage.js';
import DinoAddPage from '../dino-add/DinoAddPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/dinos" exact={true}
                render={routerProps => (
                  <DinosPage {...routerProps}/>
                )}
              />

              <Route path="/dinos/add"
                render={routerProps => (
                  <DinoAddPage {...routerProps}/>
                )}
              />

              <Route path="/dinos/:id"
                render={routerProps => (
                  <DinoDetailPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
