import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Characters from '../components/Characters';
import { getCharacters, getCharacterLoading } from '../selectors/charactersSelectors';
import { fetchCharacters } from '../actions/charactersAction';

const allCharacters = () => {
  const characters = useSelector(getCharacters);
  const charactersLoading = useSelector(getCharacterLoading);
  const dispatch = useDispatch();
  const fetchCharacterList = () => dispatch(fetchCharacters);

  useEffect(() => {
    fetchCharacterList();
  }, []);

  if(charactersLoading) return <h1>Loading...</h1>;

  return <Characters characters={characters} />;
};

export default allCharacters;
