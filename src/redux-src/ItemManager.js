import FolderIcon from '../icons/iconfinder_folder-storage-files_2931141.svg';
import FileIcon from '../icons/iconfinder_document-text-file-sheet-doc_2931167.svg';

export const ITEM_FILE = "file";
export const ITEM_FOLDER = "folder";

export const WIDGET_RENAMING = "renaming";

export const GetIcon = itemType => {
    switch (itemType) {
        case ITEM_FILE:
            return FileIcon;
        case ITEM_FOLDER:
            return FolderIcon;
        default:
            return null;
    }
}

export const IsItem = itemType => {
    switch (itemType) {
        case ITEM_FILE:
            return true;
        case ITEM_FOLDER:
            return true;
        default:
            return false;
    }
}

export const GetItemAt = (xPos, yPos, allItems) => {
    for (let i = 0; i < allItems.length; i++) {
        let item = allItems[i];
        if ((xPos <= item.xPos + 80 && xPos >= item.xPos) &&
            (yPos <= item.yPos + 80 && yPos >= item.yPos)) {
            return item;
        }
    }
    return null;
}
