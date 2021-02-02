import React from 'react';
import PropTypes from 'prop-types';

function GameShow({ game, gotId }) {
  return (
    game === gotId ? <p>Have Game</p> : ''
  );
}

GameShow.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
  gotId: PropTypes.string.isRequired,
};

export default GameShow;
