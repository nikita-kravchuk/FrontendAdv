import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route render={() => <p>Page Not Found!</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
