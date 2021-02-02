import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import GetGameList from '../actions/gameActions';
import changeFilter from '../actions/changeFilter';
import CategoryFilter from './CategoryFilter';

const GameList = ({ category, newCategory }) => {
  const dispatch = useDispatch();
  const gameList = useSelector(state => state.GameList.data);

  React.useEffect(() => {
    if (gameList.length === 0) {
      dispatch(GetGameList());
    }
  }, [dispatch]);

  const filteredGames = category === 'All' ? gameList : gameList.filter(game => game.platform === category);

  const gameElements = filteredGames.map(game => (
    <article key={game.id} className="gameItem">
      <Link to={`./game/${game.id}`} game={game}>
        <h3>{game.title}</h3>
        <img className="gameitemImg" src={game.thumbnail} alt={game.id} />
        <p>{game.platform}</p>
      </Link>
    </article>
  ));

  const handleCategory = e => {
    newCategory(e.target.value);
  };

  const showData = () => {
    if (!_.isEmpty(gameList)) {
      return (
        <div className="gameListContainer">
          <div>
            <CategoryFilter category={category} handleCategory={handleCategory} />
          </div>
          <div>
            {gameElements}
          </div>
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

GameList.propTypes = {
  category: PropTypes.string.isRequired,
  newCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  newCategory: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
