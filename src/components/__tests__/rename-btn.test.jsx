import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import RenameBtn from '../rename-btn';
import { ItemAdded } from '../../redux-src/action-creators';
import { WIDGET_RENAMING } from '../../redux-src/item-manager';

const defaultProps = {
    pos: [0, 0],
    item: {
        id: 1,
        itemType: 'any',
        xPos: 0,
        yPos: 0,
        name: 'name',
        varAny: 'any'
    }
};

const component = new TestRenderer(
    RenameBtn,
    defaultProps
);

afterEach(cleanup);

describe('RENAME button', () => {
    it('returns RENAME button', () => {
        const { baseElement } = component.renderWithStore(defaultProps);
        const button = baseElement.querySelectorAll('.menu-btn');
        expect(button).toHaveLength(1);
        expect(button[0].innerHTML).toEqual('Rename');
    });

    it('RENAME button click', () => {
        const { store, getByText } = component.renderWithStore(defaultProps);
        getByText('Rename').click();
        const action = ItemAdded(
            WIDGET_RENAMING,
            defaultProps.pos[0],
            defaultProps.pos[1],
            'Renaming Widget',
            defaultProps.item,
        );
        expect(store.getActions()).toEqual([action]);
    });
});