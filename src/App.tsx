import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import Search from './components/Search';
import { ShowSearchForm } from './components/ShowSearchForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ShowSearchForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
