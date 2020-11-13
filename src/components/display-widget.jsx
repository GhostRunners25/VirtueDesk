import React from 'react';

import * as manager from '../redux-src/ItemManager';
import RenameWidget from './rename-widget';

const DisplayWidget = (props) => {
    switch (props.type) {
        case manager.WIDGET_RENAMING:
            return <RenameWidget item={props.item} type={props.itemType} xPos={props.xPos} yPos={props.yPos} name={props.name} id={props.itemId} />
        default:
            return <div>returned null widget: {props.type}</div>
    }
}

export default DisplayWidget;