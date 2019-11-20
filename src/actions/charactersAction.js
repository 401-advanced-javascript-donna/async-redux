import { fetchCharacters } from '../services/api-call';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

export const updateCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  return fetchCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });
      dispatch({
        type: FETCH_CHARACTERS_DONE
      });
    });

};
