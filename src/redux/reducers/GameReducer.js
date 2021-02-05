const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const GameReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'GAME_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'GAME_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to get the Game msgFrom:GameReducer',
      };

    case 'GAME_SUCCESS':
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

export default GameReducer;
