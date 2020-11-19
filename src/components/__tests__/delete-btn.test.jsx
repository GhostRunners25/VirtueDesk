import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import DeleteBtn from '../delete-btn';
import { ItemDeleted } from '../../redux-src/ActionCreators';
import { reducer } from '../../redux-src/reducer';

const defaultProps = {
    id: 1,
};

const defaultState = {
    lastId: 1,
    items: [{
        id: 1,
        itemType: 'itemType',
        name: 'name',
        varAny: 'any',
        xPos: 0,
        yPos: 0,
    }]
};

const component = new TestRenderer(
    DeleteBtn,
    defaultProps,
    defaultState,
);

afterEach(cleanup);

describe('Delete Button', () => {
    it('example 1', () => {
        const { baseElement, store } = component.renderWithStore(defaultProps, defaultState);
        baseElement.click(baseElement, { button: 1 });
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(store.getState()).toEqual(expectedState);
    });

    it('example 2', () => {
        const { baseElement, store } = component.renderWithStore(defaultProps, defaultState);
        component.updateStateWithDispatch(defaultState, ItemDeleted);
        baseElement.click(baseElement, { button: 1 });
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(store.getState()).toEqual(expectedState);
    });

    it('example 3', () => {
        const { store } = component.renderWithStore(defaultProps, defaultState);
        store.dispatch(ItemDeleted);
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(store.getState()).toEqual(expectedState);
    });

    it('example 4', () => {
        const { store } = component.renderWithStore(defaultProps, defaultState);
        const action = ItemDeleted(1);
        const result = reducer(store.getState, action);
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(result).toEqual(expectedState);
    });
});