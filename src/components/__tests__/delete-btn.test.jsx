import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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

describe('Delete Button Rendering', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={createStore(reducer)}>
                <DeleteBtn id={1} />
            </Provider>, div)
      });
})

describe('Delete Button Dispatching', () => {
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
        store.dispatch(ItemDeleted, { id: 1 });
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(store.getState()).toEqual(expectedState);
    });

    it('example 4', () => {
        component.renderWithStore(defaultProps, defaultState);
        const action = ItemDeleted(1);
        const result = reducer(defaultState, action);
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(result).toEqual(expectedState);
    });

    it('example 5', () => {
        const { rerender, store } = component.renderWithStore(defaultProps, defaultState);
        rerender({ ...defaultState, items: []});
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(store.getState()).toEqual(expectedState);
    });
});