import reducer from "../reducer";
import {ItemAdded, ItemDeleted, ItemRenamed, ItemMoving} from "../ActionCreators";

const TestState = {
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

    expect(result).toEqual(TestState);
  });

  it('Reducer handles item deleted command', () => {
    const action = ItemDeleted(1);
    const result = reducer(TestState, action);

    const expected = {
      lastId: 1,
      items: []
    }

    expect(result).toEqual(expected);
  });

  it('Reducer handles item renamed command', () => {
    const action = ItemRenamed(1, 'new name');
    const result = reducer(TestState, action);

    const expected = {
      lastId: 1,
      items: [{
        id: 1,
        itemType: 'itemType',
        name: 'new name',
        varAny: 'any',
        xPos: 1,
        yPos: 2,
      }]
    }

    expect(result).toEqual(expected);
  });

  it('Reducer handles item moving command', () => {
    const action = ItemMoving(1, 100, 200);
    const result = reducer(TestState, action);

    const expected = {
      lastId: 1,
      items: [{
        id: 1,
        itemType: 'itemType',
        name: 'name',
        varAny: 'any',
        xPos: 100,
        yPos: 200,
      }]
    }

    expect(result).toEqual(expected);
  });
});
