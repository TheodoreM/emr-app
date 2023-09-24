import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './SignUp';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Route to the login page */}
          <Route path="/login" component={LoginForm} />
          {/* Route to the home page */}
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;