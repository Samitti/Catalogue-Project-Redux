import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import GetGameList from '../actions/gameActions';

const Game = props => {
  const { match } = props;
  const dispatch = useDispatch();
  const gotId = match.params.Game;
  const gotIdInt = parseInt(gotId, 10);
  const gameList = useSelector(state => state.GameList.data);

  React.useEffect(() => {
    if (gameList.length === 0) {
      dispatch(GetGameList());
    }
  }, [dispatch]);

  console.log(gotId);
  console.log(gameList);

  const gameElements = gameList.map(game => (
    <article key={game.id} className="gameItem">
      {game.id === gotIdInt
        ? (
          <div>
            <h1>{game.title}</h1>
            <img className="gameitemImg" src={game.thumbnail} alt={game.id} />
            <p>{game.short_description}</p>
            <p>{game.platform}</p>
            <p>
              <span>Publisher : </span>
              {game.publisher}
            </p>
          </div>
        )
        : <p /> }
    </article>
  ));

  const showData = () => {
    if (!_.isEmpty(gameList)) {
      return (
        <div className="gameListContainer">
          {gameElements}
        </div>
      );
    }

    if (gameList.loading) {
      return <p>Loading...</p>;
    }

    if (gameList.errorMsg !== '') {
      return <p>{gameList.errorMsg}</p>;
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
