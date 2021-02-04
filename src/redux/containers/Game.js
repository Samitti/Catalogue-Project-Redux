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

  const gameElements = gameList.map(game => (
    <article key={game.id}>
      {game.id === gotIdInt
        ? (
          <div className="gameItemGame">
            <div className="lefside">
              <img className="gameitemImgGame" src={game.thumbnail} alt={game.id} />
              <div className="insideLeftside">
                <p>{game.platform}</p>
                <p>
                  <span>Publisher : </span>
                  {game.publisher}
                </p>
              </div>
            </div>
            <div className="rightSide">
              <h1>{game.title}</h1>
              <p>{game.short_description}</p>
              <a href={`${game.freetogame_profile_url}`} rel="noreferrer" target="_blank" id="playGameLink">
                <span>PLAY GAME</span>
              </a>
            </div>
          </div>
        )
        : <p /> }
    </article>
  ));

  const showData = () => {
    if (!_.isEmpty(gameList)) {
      return (
        <div className="gameListContainerGame">
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
