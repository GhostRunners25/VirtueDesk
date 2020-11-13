import React from 'react';
import { ITEM_FILE } from '../redux-src/ItemManager';
import { ItemAdded } from '../redux-src/ActionCreators';

import { useDispatch } from 'react-redux';

const AddFileBtn = (props) => {
    const dispatch = useDispatch();
    return <div className={'btn'} onClick={() => dispatch(ItemAdded(ITEM_FILE, props.pos[0], props.pos[1], 'new file', 'none'))}>{'Add file'}</div>
}

// Change props.pos so it is passed an array instead

export default AddFileBtn;