import './App.css';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <h1>FREE-TO-PLAY GAMES LIST</h1>
        <a href="/" id="home">HOME</a>
      </nav>
      <div className="gameListContainer">
        <Routes />
      </div>
    </div>
  );
}

export default App;
