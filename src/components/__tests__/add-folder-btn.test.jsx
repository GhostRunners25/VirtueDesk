import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import AddFolderBtn from '../add-folder-btn';
import { ItemAdded } from '../../redux-src/action-creators';
import { ITEM_FOLDER } from '../../redux-src/item-manager';

const defaultProps = {
    pos: [0, 0]
};

const component = new TestRenderer(
    AddFolderBtn,
    defaultProps
);

afterEach(cleanup);

describe('ADD FOLDER button', () => {
    it('returns ADD FOLDER button', () => {
        const { baseElement } = component.renderWithStore(defaultProps);
        const button = baseElement.querySelectorAll('.menu-btn');
        expect(button).toHaveLength(1);
        expect(button[0].innerHTML).toEqual('Add folder');
    });

    it('ADD FOLDER button click', () => {
        const { store, getByText } = component.renderWithStore(defaultProps);
        getByText('Add folder').click();
        const action = ItemAdded(
            ITEM_FOLDER,
            defaultProps.pos[0],
            defaultProps.pos[1],
            'new folder',
            'none',
        );
        expect(store.getActions()).toEqual([action]);
    });
});