import React from 'react';
import { ItemDeleted } from '../redux-src/ActionCreators';

import { useDispatch } from 'react-redux';

const DeleteBtn = (props) => {
    const dispatch = useDispatch();
    return <div className={'btn'} onClick={() => dispatch(ItemDeleted(props.id))}>{'Delete'}</div>
}
export default DeleteBtn;