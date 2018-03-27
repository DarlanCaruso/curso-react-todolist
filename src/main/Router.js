import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todo from '../todo/Todo';
import About from '../about/About';

export default props => (
  <Router>
    <div>
      <Route path="/about" component={About} />
      <Route path="/todo" component={Todo} />
    </div>
  </Router>
);
