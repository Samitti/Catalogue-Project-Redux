const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const GameListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'GAME_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'GAME_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get Games msgFrom GameListReducer',
      };

    case 'GAME_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: action.payload,
      };

    default:
      return state;
  }
};

export default GameListReducer;
