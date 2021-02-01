import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import GetGameList from '../actions/gameActions';

const GameList = () => {
  const dispatch = useDispatch();
  const gameList = useSelector(state => state.GameList);

  React.useEffect(() => {
    if (gameList.length === 0) {
      dispatch(GetGameList());
    }
  }, [dispatch]);

  const showData = () => {
    if (!_.isEmpty(gameList.data)) {
      return <p>Have Data</p>;
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
