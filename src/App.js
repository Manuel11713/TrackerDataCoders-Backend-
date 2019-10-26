import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import HomeContainer from './Views/HomeContainer.jsx';
 

const  App=()=> {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={props=><HomeContainer/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
