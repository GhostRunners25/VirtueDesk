import React from 'react';
import { useDispatch } from 'react-redux';

import { ITEM_FILE } from '../redux-src/item-manager';
import { ItemAdded } from '../redux-src/action-creators';

const AddFileBtn = (props) => {
    const dispatch = useDispatch();
    return <button className={'menu-btn'} onClick={
        () => dispatch(ItemAdded(
            ITEM_FILE,
            props.pos[0],
            props.pos[1],
            'new file',
            'none'
        ))}>Add file</button>
}

// Change props.pos so it is passed an array instead

export default AddFileBtn;