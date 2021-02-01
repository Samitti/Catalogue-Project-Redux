import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'x-rapidapi-key': '82bfac8606mshd93829564699973p18b93fjsn8bc97dd4ae79',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

const GetGameList = () => async dispatch => {
  dispatch({
    type: 'GAME_LIST_LOADING',
  });

  axios.request(options).then(response => {
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

export default GetGameList;
