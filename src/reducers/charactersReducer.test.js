import characterReducer from '../reducers/charactersReducer';
import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_DONE, FETCH_CHARACTERS } from '../actions/charactersAction';

describe('Characters Reducer', () => {
  it('should handle FETCH_CHARACTERS_LOADING', () => {
    const state = {
      characterList: [],
      characterLoading: false
    };
    const action = {
      type: FETCH_CHARACTERS_LOADING
    };
    const result  = characterReducer(state, action);
    expect(result).toEqual({
      characterList: [],
      characterLoading: true
    });
  });
  it('should handle FETCH_CHARACTERS_DONE', () => {
    const state = {
      characterList: [],
      characterLoading: false
    };
    const action = {
      type: FETCH_CHARACTERS_DONE
    };
    const result  = characterReducer(state, action);
    expect(result).toEqual({
      characterList: [],
      characterLoading: true
    });
  });
  it('should handle FETCH_CHARACTERS', () => {
    const state = {
      characterList: [],
      characterLoading: false
    };
    const action = {
      type: FETCH_CHARACTERS,
      payload: [{
        _id: '5cf5679a915ecad153ab68c8',
        allies: [
          'Royal Earthbender Guards'
        ],
        enemies: [
          'Chin'
        ],
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        name: '46th Earth King',
        affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
      }]
    };
    const result  = characterReducer(state, action);
    expect(result).toEqual({
      characterList: [{
        _id: '5cf5679a915ecad153ab68c8',
        allies: [
          'Royal Earthbender Guards'
        ],
        enemies: [
          'Chin'
        ],
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        name: '46th Earth King',
        affiliation: ' Earth Kingdom Earth Kingdom Royal Family',
      }],
      characterLoading: false
    });
  });
});
