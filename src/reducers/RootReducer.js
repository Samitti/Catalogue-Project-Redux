import { combineReducers } from 'redux';
import GameListReducer from './GameListReducer';
import filterReducer from './filter';
import GameReducer from './GameReducer';

const RootReducer = combineReducers({
  GameList: GameListReducer,
  Game: GameReducer,
  category: filterReducer,
});

export default RootReducer;
