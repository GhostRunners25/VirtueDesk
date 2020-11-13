import React from 'react';
import { ITEM_FOLDER } from '../redux-src/ItemManager';
import { ItemAdded } from '../redux-src/ActionCreators';

import { useDispatch } from 'react-redux';

const AddFolderBtn = (props) => {
    const dispatch = useDispatch();
    return <div className={'btn'} onClick={() => dispatch(ItemAdded(ITEM_FOLDER, props.pos[0], props.pos[1], 'new folder', 'none'))}>{'Add folder'}</div>
}

// Change props.pos so it is passed an array instead

export default AddFolderBtn;