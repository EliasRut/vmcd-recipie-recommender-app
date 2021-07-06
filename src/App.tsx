import React from 'react';
import { RecipieList } from './features/recipies/RecipieList';
import './App.css';
import { RecipieInput } from './features/recipies/RecipieInput';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { RecipieDetails } from './features/recipies/RecipieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/recipies/:recipieName" children={<RecipieDetails />} />
          <Route path="/recipies">
            <RecipieList />
          </Route>
          <Route path="/">
            <div className="App__contentWrapper">
              <RecipieList />
              <RecipieInput />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
