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
        
    });

    it('Filters out non-icon items', () => {
        
    });

    it('Filters in icon items', () => {
        
    });

    it('Displays multiple icon items', () => {
        
    });
});