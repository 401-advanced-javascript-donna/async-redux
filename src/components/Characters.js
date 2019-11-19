import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const charElements = characters.map((character, i) => {
    <li key={character._id || i}>
      <Character {...character} />
    </li>;
  });

  return (
    <ul>
      {charElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
