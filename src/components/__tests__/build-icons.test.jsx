import * as manager from '../../redux-src/item-manager';

import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';
import BuildIcons from '../build-icons';

afterEach(cleanup);

describe('BuildIcons', () => {
    const defaultState = {
        lastId: 0,
        items: []
    }

    const component = new TestRenderer(BuildIcons, {}, defaultState);

    it('No items in the store', () => {
        const { baseElement } = component.renderWithStore();
        const icons = baseElement.querySelectorAll('.icon-container');
        expect(icons).toHaveLength(0);
    });

    it('If store is undefined', () => {
        const { baseElement } = component.renderWithStore({}, undefined);
        const icons = baseElement.querySelectorAll('.icon-container');
        expect(icons).toHaveLength(0);
    });

    it('Filters out non-icon items', () => {
        const filterState = {
            lastId: 1,
            items: [{
                id: 1,
                itemType: manager.WIDGET_RENAMING,
                xPos: 0,
                yPos: 0,
                name: 'name',
                varAny: 'any',
            }]
        };
        const { baseElement } = component.renderWithStore({}, filterState);
        const icons = baseElement.querySelectorAll('.icon-container');
        expect(icons).toHaveLength(0);
    });

    it('Filters in icon items', () => {
        const filterState = {
            lastId: 1,
            items: [{
                id: 1,
                itemType: manager.ITEM_FILE,
                xPos: 0,
                yPos: 0,
                name: 'name',
                varAny: 'any',
            }]
        };
        const { baseElement } = component.renderWithStore({}, filterState);
        const icons = baseElement.querySelectorAll('.icon-container');
        expect(icons).toHaveLength(1);
    });

    it('Displays multiple icon items', () => {
        const filterState = {
            lastId: 1,
            items: [{
                id: 1,
                itemType: manager.ITEM_FILE,
                xPos: 0,
                yPos: 0,
                name: 'name',
                varAny: 'any',
            },
            {
                id: 2,
                itemType: manager.ITEM_FOLDER,
                xPos: 0,
                yPos: 0,
                name: 'name',
                varAny: 'any',
            },
            {
                id: 3,
                itemType: manager.WIDGET_RENAMING,
                xPos: 0,
                yPos: 0,
                name: 'name',
                varAny: 'any',
            }]
        };
        const { baseElement } = component.renderWithStore({}, filterState);
        const icons = baseElement.querySelectorAll('.icon-container');
        expect(icons).toHaveLength(2);
    });
});