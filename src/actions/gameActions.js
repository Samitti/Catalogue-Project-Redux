import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'x-rapidapi-key': '82bfac8606mshd93829564699973p18b93fjsn8bc97dd4ae79',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const GetGameList = () => async dispatch => {
  try {
    dispatch({
      type: 'GAME_LIST_LOADING',
    });

    const res = await axios.get(options);

    dispatch({
      type: 'GAME_LIST_SUCCESS',
    });
  } catch (e) {
    dispatch({
      type: 'GAME_LIST_FAIL',
    });
  }
};
