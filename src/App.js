import './App.css';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import GameList from './components/GameList';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Search</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={GameList} />
        <Route path="/Game/:Game" exact component={Game} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
