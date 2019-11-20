import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import allCharacters from '../containers/allCharacters';
import './App.css';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={allCharacters} />
      </Switch>
    </Router>
  );
}
