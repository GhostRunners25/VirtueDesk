import React from 'react';
import { useDispatch } from 'react-redux';

import { ItemAdded } from '../redux-src/action-creators';
import { WIDGET_RENAMING } from '../redux-src/item-manager';

const RenameBtn = (props) => {
    const dispatch = useDispatch();
    return <button className={'menu-btn'} onClick={
        () => dispatch(ItemAdded(
            WIDGET_RENAMING,
            props.pos[0],
            props.pos[1],
            'Renaming Widget',
            props.item
        ))}>Rename</button>
}

export default RenameBtn;
