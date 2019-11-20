import { getCharacters, getCharacterLoading } from './charactersSelectors';

describe('character selectors', () => {
  it('should get characters', () => {
    const state = {
      characters: {
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
      }
    };
    const result = getCharacters(state);
    expect(result).toEqual([{
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
    }]);
  });
  it('should get characterLoading', () => {
    const state = {
      characters: {
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
      }
    };
    const result = getCharacterLoading(state);
    expect(result).toBe(false);
  });
});
