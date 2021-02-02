import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { GetGame } from '../actions/gameActions';

const Game = props => {
  const { match } = props;
  const dispatch = useDispatch();
  const gotId = match.params.Game;
  const game = useSelector(state => state.Game.data);

  const optionsGame = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: { id: `${gotId}` },
    headers: {
      'x-rapidapi-key': '82bfac8606mshd93829564699973p18b93fjsn8bc97dd4ae79',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };
  React.useEffect(() => {
    if (game !== {}) {
      dispatch(GetGame(optionsGame));
    }
  }, [dispatch]);

  const showData = () => {
    if (!_.isEmpty(game)) {
      return (
        <div className="gameContainer">
          <h2>{game.id}</h2>
          <h2>{game.title}</h2>
          <img className="gameitemImg" src={game.thumbnail} alt={game.id} />
          <Link to={game.game_url}>Play Game</Link>
        </div>
      );
    }

    if (game.loading) {
      return <p>Loading...</p>;
    }

    if (game.errorMsg !== '') {
      return <p>{game.errorMsg}</p>;
    }

    return <p>Unable to get data msgFrom:GameList-showData method</p>;
  };

  return (
    <div>
      {showData()}
    </div>
  );
};

Game.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Game;
