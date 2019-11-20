import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ _id, name, photoUrl }) => {
  return (
    <div className={styles.Characer}>
      <Link to={`/character/${_id}`}>
        <img src={photoUrl} />
        <p>{name}</p>
      </ Link>
    </div>
  );
};

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
