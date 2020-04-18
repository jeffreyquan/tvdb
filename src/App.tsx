import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ShowSearchPage } from './pages/ShowSearchPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ShowSearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
