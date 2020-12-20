import React from 'react';
import { useSelector } from 'react-redux';

import * as manager from '../redux-src/item-manager';
import DisplayIcon from './display-icon';

const BuildIcons = () => {
    const allItems = useSelector(state => state.items) || [];
    return allItems
        .filter(item => manager.IsItem(item.itemType))
        .map(item =>
            <DisplayIcon
                key={item.id}
                icon={manager.GetIcon(item.itemType)}
                type={item.itemType} xPos={item.xPos}
                yPos={item.yPos}
                name={item.name}
                id={item.id}
            />
        );
}

export default BuildIcons;