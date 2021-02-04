import GameListReducer from '../../redux/reducers/GameListReducer';

describe('gaame list reducer', () => {
  it('should return the initial state', () => {
    const action = {
      type: 'GAME_LIST_LOADING',
    };
    expect(GameListReducer(undefined, action)).toEqual(
      {
        data: [],
        loading: true,
        errorMsg: '',
      },
    );
  });

  it('should return the fetched data', () => {
    const action = {
      type: 'GAME_LIST_SUCCESS',
      payload: [],

    };
    expect(GameListReducer(undefined, action)).toEqual(
      {
        data: [],
        loading: false,
        errorMsg: '',
      },
    );
  });

  it('should return error msg if fail', () => {
    const action = {
      type: 'GAME_LIST_FAIL',
    };
    expect(GameListReducer(undefined, action)).toEqual(
      {
        data: [],
        loading: false,
        errorMsg: 'Unable to get Games msgFrom GameListReducer',
      },
    );
  });
});
