import React from 'react';
import '../App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register'
import Users from './Users'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
        <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Users">Protected Users Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
