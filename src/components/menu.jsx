import React from 'react';

import AddFolderBtn from './add-folder-btn';
import AddFileBtn from './add-file-btn';
import RenameBtn from './rename-btn';
import DeleteBtn from './delete-btn';

import { GetItemAt } from '../redux-src/ItemManager';
import { useSelector } from "react-redux";

const Menu = (props) => {
    const allItems = useSelector(state => state.items);
    const item = GetItemAt(props.xPos, props.yPos, allItems);
    return <div className={'menu'} style={{ left: props.xPos, top: props.yPos }}>
        {item === null ? <>
            <AddFolderBtn pos={[props.xPos, props.yPos]} />
            <AddFileBtn pos={[props.xPos, props.yPos]} />
        </> : <>
                <RenameBtn item={item} pos={[props.xPos, props.yPos]} />
                <DeleteBtn id={item.id} />
            </>}
    </div>
}

export default Menu;
