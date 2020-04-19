import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ShowSearch } from './pages/ShowSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ShowSearch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
