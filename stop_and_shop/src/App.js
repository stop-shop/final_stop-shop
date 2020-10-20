import React, { Component } from 'react';
import './App.css';
import Slideshow from './components/home';
import Service_1 from './service_1';
import Goods from './components/goods';
import Pages from './components/home_services_goods';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';


class App extends Component {
  state = {
    loggedIn: false
  }
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/service" component={Service_1} />
        <Route path="/goods" component={Goods} />
        
        <div className="App">
          <Slideshow />
          <Pages />
        </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
