import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { ShowSearch } from './pages/ShowSearch';
import { Shows } from './pages/Shows';
import { Show } from './pages/Show';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/search">
          <ShowSearch />
        </Route>
        <Route path="/show/:id" component={Show}/>
        <Route exact path="/">
          <Shows />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
