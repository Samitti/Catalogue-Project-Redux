import axios from 'axios';

const optionsList = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'x-rapidapi-key': '82bfac8606mshd93829564699973p18b93fjsn8bc97dd4ae79',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

const optionsGame = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: { id: '452' },
  headers: {
    'x-rapidapi-key': '82bfac8606mshd93829564699973p18b93fjsn8bc97dd4ae79',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

export const GetGameList = () => async dispatch => {
  dispatch({
    type: 'GAME_LIST_LOADING',
  });

  axios.request(optionsList).then(response => {
    dispatch({
      type: 'GAME_LIST_SUCCESS',
      payload: response.data,
    });
  }).catch(() => {
    dispatch({
      type: 'GAME_LIST_FAIL',
    });
  });
};

export const GetGame = () => async dispatch => {
  dispatch({
    type: 'GAME_LOADING',
  });

  axios.request(optionsGame).then(response => {
    dispatch({
      type: 'GAME_SUCCESS',
      payload: response.data,
    });
  }).catch(() => {
    dispatch({
      type: 'GAME_FAIL',
    });
  });
};
