import { combineReducers } from 'redux';
import GameListReducer from './GameListReducer';
import GameReducer from './GameReducer';

const RootReducer = combineReducers({
  GameList: GameListReducer,
  Game: GameReducer,
});

export default RootReducer;
