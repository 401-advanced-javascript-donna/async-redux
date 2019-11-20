import { fetchCharacters } from '../services/api-call';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

// Promises Middleware
export const updateCharacters = () => ({
  type: FETCH_CHARACTERS,
  pendingType: FETCH_CHARACTERS_LOADING,
  fulfilledType: FETCH_CHARACTERS_DONE,
  payload: fetchCharacters()
});

// export const updateCharacters = () => dispatch => {
//   dispatch({
//     type: FETCH_CHARACTERS_LOADING
//   });

//   return fetchCharacters()
//     .then(characters => {
//       dispatch({
//         type: FETCH_CHARACTERS,
//         payload: characters
//       });
//       dispatch({
//         type: FETCH_CHARACTERS_DONE
//       });
//     });

// };
