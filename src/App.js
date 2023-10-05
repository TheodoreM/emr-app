import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Patients from './Patients';
import Appointments from './Appointments';
import Navbar from './Navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/patients" component={Patients} />
          <Route path="/appointments" component={Appointments} />
          {/* Define more routes for other components */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;