import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_DONE, FETCH_CHARACTERS } from '../actions/charactersAction';


const initialState = {
  characterList: [],
  characterLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_LOADING:
    case FETCH_CHARACTERS_DONE:
      return { ...state, characterLoading: !state.characterLoading };
    case FETCH_CHARACTERS:
      return { ...state, characterList: action.payload };
    default:
      return state;
  }
}
