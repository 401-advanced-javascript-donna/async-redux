import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = ({ _id, name, photoUrl }) => {
  return (
    <Link to={`/character/${_id}`}>
      <img src={photoUrl} alt={name}/>
      <figcaption>{name}</figcaption>
    </Link>
  );
};

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequire,
  photoUrl: PropTypes.string.isRequire
};

export default Character;
