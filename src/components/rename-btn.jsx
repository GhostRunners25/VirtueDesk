import React from 'react';
import { ItemRename } from '../redux-src/ActionCreators';

import { useDispatch } from 'react-redux';

const RenameBtn = (props) => {
    const dispatch = useDispatch();
    return <div className={'btn'} onClick={() => dispatch(ItemRename(props.var))}>{'Rename'}</div>
}
export default RenameBtn;