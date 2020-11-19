import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import DeleteBtn from '../delete-btn';

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
    it('button click calls dispatch', () => {
        const { baseElement, store } = component.renderWithStore(defaultProps, defaultState);
        baseElement.click(baseElement, { button: 1 });
        const expectedState = {
            lastId: 1,
            items: []
        };
        expect(store.getState()).toEqual(expectedState);
    });
});