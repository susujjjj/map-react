import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from './Map'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Map} />        
      </Switch>
    </Router>
  );
}

export default App;
