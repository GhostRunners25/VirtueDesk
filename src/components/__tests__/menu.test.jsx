import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';

import * as manager from '../../redux-src/item-manager';
import Menu from '../menu';

afterEach(cleanup);

describe('Menu', () => {
    const defaultState = {
        lastId: 0,
        items: []
    }

    const closeIconState = {
        lastId: 1,
        items: [{
            id: 1,
            itemType: manager.ITEM_FILE,
            xPos: 0,
            yPos: 0,
            name: 'name',
            varAny: 'any'
        }]
    };

    const farIconState = {
        lastId: 1,
        items: [{
            id: 1,
            itemType: manager.ITEM_FILE,
            xPos: 81,
            yPos: 81,
            name: 'name',
            varAny: 'any',
        }]
    };

    const defaultProps = {
        xPos: 0,
        yPos: 0
    }

    const component = new TestRenderer(
        Menu,
        defaultProps,
        defaultState
    );

    describe('returns menu correctly', () => {
        it('returns one menu', () => {
            const { baseElement } = component.renderWithStore(defaultProps);
            const menu = baseElement.querySelectorAll('.menu');
            expect(menu).toHaveLength(1);
        });

        it('menu styled to the correct position', () => {
            const { baseElement } = component.renderWithStore(defaultProps);
            const menu = baseElement.querySelectorAll('.menu');
            expect(menu[0].style.left).toBe(defaultProps.xPos.toString() + "px");
            expect(menu[0].style.top).toBe(defaultProps.yPos.toString() + "px");
        });
    });

    describe('returns the correct menu buttons', () => {
        it('return ADD FOLDER & ADD FILE button when initial state', () => {
            const { baseElement } = component.renderWithStore(defaultProps);
            const buttons = baseElement.querySelectorAll('.menu-btn');
            expect(buttons).toHaveLength(2);
            expect(buttons[0].innerHTML).toEqual('Add folder');
            expect(buttons[1].innerHTML).toEqual('Add file');
        });

        it('return ADD FOLDER & ADD FILE button when state undefined', () => {
            const { baseElement } = component.renderWithStore(
                defaultProps,
                undefined
            );
            const buttons = baseElement.querySelectorAll('.menu-btn');
            expect(buttons).toHaveLength(2);
            expect(buttons[0].innerHTML).toEqual('Add folder');
            expect(buttons[1].innerHTML).toEqual('Add file');
        });

        it('return ADD FOLDER & ADD FILE button when icon out of range', () => {
            const { baseElement } = component.renderWithStore(
                defaultProps,
                farIconState
            );
            const buttons = baseElement.querySelectorAll('.menu-btn');
            expect(buttons).toHaveLength(2);
            expect(buttons[0].innerHTML).toEqual('Add folder');
            expect(buttons[1].innerHTML).toEqual('Add file');
        });

        it('return RENAME & DELETE button when icon in range', () => {
            const { baseElement } = component.renderWithStore(
                defaultProps,
                closeIconState
            );
            const buttons = baseElement.querySelectorAll('.menu-btn');
            expect(buttons).toHaveLength(2);
            expect(buttons[0].innerHTML).toEqual('Rename');
            expect(buttons[1].innerHTML).toEqual('Delete');
        });
    });
});