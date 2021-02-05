import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import GameList from './GameList';
import Game from './Game';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={GameList} />
      <Route path="/Game" exact component={GameList} />
      <Route path="/Game/:Game" exact component={Game} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
