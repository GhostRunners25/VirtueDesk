import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import DeleteBtn from '../delete-btn';
import { ItemDeleted } from "../../redux-src/action-creators";

const defaultProps = {
    id: 1,
};

const component = new TestRenderer(
    DeleteBtn,
    defaultProps
);

afterEach(cleanup);

describe('DELETE button', () => {
    it('returns a DELETE button', () => {
        const { baseElement } = component.renderWithStore(defaultProps);
        const button = baseElement.querySelectorAll('.menu-btn');
        expect(button).toHaveLength(1);
        expect(button[0].innerHTML).toEqual('Delete');
    });

    it('DELETE button click', () => {
        const { store, getByText } = component.renderWithStore(defaultProps);
        getByText('Delete').click();
        const action = ItemDeleted(defaultProps.id);
        expect(store.getActions()).toEqual([action]);
    });
});
