import { TestRenderer } from 'react-redux-test-renderer';
import { cleanup } from '@testing-library/react';
import DeleteBtn from '../delete-btn';
import {ItemDeleted} from "../../redux-src/ActionCreators";

const defaultProps = {
    id: 1,
};

const component = new TestRenderer(
    DeleteBtn,
    defaultProps,
);

afterEach(cleanup);

describe('Delete Button', () => {
    it('Click', () => {
        const {store, getByText} = component.renderWithStore(defaultProps);
        getByText('Delete').click();
        const action = ItemDeleted(defaultProps.id)
        expect(store.getActions()).toEqual([action]);
    });
});
