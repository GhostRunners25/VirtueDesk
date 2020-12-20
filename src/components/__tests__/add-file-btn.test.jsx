import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import AddFileBtn from '../add-file-btn';
import { ItemAdded } from '../../redux-src/action-creators';
import { ITEM_FILE } from '../../redux-src/item-manager';

const defaultProps = {
    pos: [0, 0]
};

const component = new TestRenderer(
    AddFileBtn,
    defaultProps
);

afterEach(cleanup);

describe('ADD FILE button', () => {
    it('returns ADD FILE button', () => {
        const { baseElement } = component.renderWithStore(defaultProps);
        const button = baseElement.querySelectorAll('.menu-btn');
        expect(button).toHaveLength(1);
        expect(button[0].innerHTML).toEqual('Add file');
    });

    it('ADD FILE button click', () => {
        const { store, getByText } = component.renderWithStore(defaultProps);
        getByText('Add file').click();
        const action = ItemAdded(
            ITEM_FILE,
            defaultProps.pos[0],
            defaultProps.pos[1],
            'new file',
            'none',
        );
        expect(store.getActions()).toEqual([action]);
    });
});