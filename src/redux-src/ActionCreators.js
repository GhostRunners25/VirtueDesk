export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_DELETED = "ITEM_DELETED";
export const ITEM_RENAME = "ITEM_RENAME";

export const ItemAdded = (itemType, xPos, yPos, name, any) => ({
    type: ITEM_ADDED,
    payload: {
        itemType,
        xPos,
        yPos,
        name,
        any
    }
});

export const ItemDeleted = id => ({
    type: ITEM_DELETED,
    payload: {
        id
    }
});

export const ItemRename = (id, name) => ({
    type: ITEM_RENAME,
    payload: {
        id,
        name
    }
})