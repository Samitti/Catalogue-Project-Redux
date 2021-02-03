import './App.css';
import {
  Switch, Route, NavLink,
} from 'react-router-dom';
import GameList from './components/GameList';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <h1>FREE-TO-PLAY GAMES LIST</h1>
        <NavLink to="/">HOME</NavLink>
      </nav>
      <div className="gameListContainer">
        <Switch>
          <Route path="/" exact component={GameList} />
          <Route path="/Game/:Game" exact component={Game} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
