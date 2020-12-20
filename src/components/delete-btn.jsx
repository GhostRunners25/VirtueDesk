import React from 'react';
import { ItemDeleted } from '../redux-src/action-creators';

import { useDispatch } from 'react-redux';

const DeleteBtn = (props) => {
    const dispatch = useDispatch();
    return <button className={'menu-btn'} onClick={
        () => dispatch(ItemDeleted(props.id))}>Delete</button>
}
export default DeleteBtn;
