import React from 'react';

import AddFolderBtn from './add-folder-btn';
import AddFileBtn from './add-file-btn';
import RenameBtn from './rename-btn';
import DeleteBtn from './delete-btn';

import { GetItemAt } from '../redux-src/ItemManager';

const Menu = (props) => {
    let item = GetItemAt(props.xPos, props.yPos);
    return <div id={'menu'} style={{ left: props.xPos, top: props.yPos }}>
        {item === null ? <>
            <AddFolderBtn pos={[props.xPos, props.yPos]} />
            <AddFileBtn pos={[props.xPos, props.yPos]} />
        </> : <>
                <RenameBtn var={item.id} />
                <DeleteBtn var={item.id} />
            </>}
    </div>
}

export default Menu;