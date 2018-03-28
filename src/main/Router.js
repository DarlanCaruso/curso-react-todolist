import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Todo from '../todo/Todo';
import About from '../about/About';

export default props => (
  <Router>
    <div>
    <Switch>
      <Route exact path='/' component={Todo} />
      <Route exact path='/todo' component={Todo} />
      <Route exact path='/about' component={About} />
      <Route component={Todo} />
    </Switch>
    </div>
  </Router>
);
