import React from 'react';
import { useSelector } from 'react-redux';

import * as manager from '../redux-src/ItemManager';
import DisplayWidget from './display-widget';

const BuildWidgets = (props) => {
    const allItems = useSelector(state => state.items);
    return allItems
    .filter(item => !manager.IsItem(item.itemType))
    .map(item =>
        <DisplayWidget 
        key={item.id} 
        item={item.any} 
        type={item.itemType} 
        xPos={item.xPos} 
        yPos={item.yPos} 
        name={item.name} 
        id={item.itemId} 
        />
        );
}

export default BuildWidgets;