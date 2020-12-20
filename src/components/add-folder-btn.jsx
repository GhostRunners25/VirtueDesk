import React from 'react';
import { ITEM_FOLDER } from '../redux-src/item-manager';
import { ItemAdded } from '../redux-src/action-creators';

import { useDispatch } from 'react-redux';

const AddFolderBtn = (props) => {
    const dispatch = useDispatch();
    return <button className={'menu-btn'} onClick={
        () => dispatch(ItemAdded(
            ITEM_FOLDER,
            props.pos[0],
            props.pos[1],
            'new folder',
            'none'
        ))}>Add folder</button>
}

// Change props.pos so it is passed an array instead

export default AddFolderBtn;