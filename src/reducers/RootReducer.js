import { combineReducers } from 'redux';
import GameListReducer from './GameListReducer';

const RootReducer = combineReducers({
  GameList: GameListReducer,
});

export default RootReducer;
