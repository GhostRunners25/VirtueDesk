import React from 'react';
import { useDispatch } from 'react-redux';

import { ItemAdded } from '../redux-src/ActionCreators';
import { WIDGET_RENAMING } from '../redux-src/ItemManager';

const RenameBtn = (props) => {
    const dispatch = useDispatch();
    return (<div
      className={'btn'}
      onClick={() => dispatch(ItemAdded(WIDGET_RENAMING, props.pos[0], props.pos[1], 'Renaming Widget', props.item))}
    >
        Rename
    </div>)
}

export default RenameBtn;
