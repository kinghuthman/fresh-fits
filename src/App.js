import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      {/**switch finds a match within the path and does not render anything else but that path  */}
      <Switch>
        <Route exact path = '/' component={Homepage} />
        <Route path = '/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
 