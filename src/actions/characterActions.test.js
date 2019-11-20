import { updateCharacters, FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_DONE } from './charactersAction';
jest.mock('../services/api-call', () => ({
  fetchCharacters: () => Promise.resolve([])
}));

describe('character actions', () => {
  it('should update characters', () => {
    const result = updateCharacters();
    expect(result).toEqual({
      type: FETCH_CHARACTERS,
      pendingType: FETCH_CHARACTERS_LOADING,
      fulfilledType: FETCH_CHARACTERS_DONE,
      payload: Promise.resolve([])
    });
  });
});
