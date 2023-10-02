import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './SignUp';
import Home from './Home';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = 

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login"
         <LoginForm onLogin={handleLogin} />
        <Route path="/home" component={Home} />
      </Switch>

    </Router>
  );
}

export default App;