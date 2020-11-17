export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_DELETED = "ITEM_DELETED";
export const ITEM_RENAMED = "ITEM_RENAMED";
export const ITEM_MOVING = "ITEM_MOVING";

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

export const ItemRenamed = (id, name) => ({
    type: ITEM_RENAMED,
    payload: {
        id,
        name
    }
});

export const ItemMoving = (id, xPos, yPos) => ({
    type: ITEM_MOVING,
    payload: {
        id,
        xPos,
        yPos
    }
});