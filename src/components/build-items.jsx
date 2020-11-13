import React from 'react';
import { useStore } from 'react-redux';

import * as manager from './redux-src/ItemManager';
import DisplayIcon from './display-icon';

const BuildIcons = (props) => {
    const allItems = useStore();
    return allItems.getState().filter(item => manager.IsItem(item.itemType)).map(item =>
        <DisplayIcon key={item.id} icon={manager.GetIcon(item.itemType)} type={item.itemType} xPos={item.xPos} yPos={item.yPos} name={item.name} id={item.itemId} />);
}

const BuildWidgets = (props) => {

}

const BuildItemsOld = (props) => {
    const allItems = useStore();
    let itemHolder = [];
    for (let i = 0; i < allItems.getState().length; i++) {
        let item = allItems.getState()[i];
        if (builder.IsItem(item.itemType)) {
            itemHolder.push(
                // <PrepareItem key={i} icon={builder.GetIcon(item.itemType)} type={item.itemType} xPos={item.xPos} yPos={item.yPos} name={item.name} id={item.itemId} />
            );
        }
        else {
            itemHolder.push(
                // <PrepareWidget key={i} type={item.itemType} xPos={item.xPos} yPos={item.yPos} name={item.name} id={item.itemId} />
            );
        }
        switch (item.any) {
            case builder.WIDGET_RENAMING:
                //AddItem();
                break;
            default:
                break;
        }
    }
    return (
        <div>
            {itemHolder}
        </div>
    );
}

export default BuildItemsOld;