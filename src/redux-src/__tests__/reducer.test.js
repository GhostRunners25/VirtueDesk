import reducer from "../reducer";
import {ItemAdded, ItemDeleted, ItemRenamed} from "../ActionCreators";

describe('Reducer', () => {
  it('Reducer handles unknown command', () => {
    const state = {
      lastId: 0,
      items: []
    }
    const result = reducer(state, { type: 'UNKNOWN' });

    expect(result).toEqual(state);
  });

  it('Reducer handles item added command', () => {
    const state = {
      lastId: 0,
      items: []
    }

    const action = ItemAdded('itemType', 1, 2, 'name', 'any');
    const result = reducer(state, action);

    const expected = {
      lastId: 1,
      items: [{
        id: 1,
        itemType: 'itemType',
        name: 'name',
        varAny: 'any',
        xPos: 1,
        yPos: 2,
      }]
    }

    expect(result).toEqual(expected);
  });

  it('Reducer handles item deleted command', () => {
    const state = {
      lastId: 1,
      items: [{
        id: 1,
        itemType: 'itemType',
        name: 'name',
        varAny: 'any',
        xPos: 1,
        yPos: 2,
      }]
    }

    const action = ItemDeleted(1);
    const result = reducer(state, action);

    const expected = {
      lastId: 1,
      items: []
    }

    expect(result).toEqual(expected);
  });

  it('Reducer handles item renamed command', () => {

  })
});
