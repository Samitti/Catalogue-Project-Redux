import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetGameList } from '../actions/gameActions';

const GameList = () => {
  const dispatch = useDispatch();
  const gameList = useSelector(state => state.GameList.data);

  React.useEffect(() => {
    if (gameList.length === 0) {
      dispatch(GetGameList());
    }
  }, [dispatch]);

  const gameElements = gameList.map(game => (
    <article key={game.id} className="gameItem">
      <Link to={`./game/${game.id}`} game={game}>
        <img className="gameitemImg" src={game.thumbnail} alt={game.id} />
      </Link>
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

export default GameList;
