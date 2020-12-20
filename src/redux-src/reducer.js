import * as actions from './action-creators';

const initial = {
    lastId: 0,
    items: []
}

export default function reducer(state = initial, action) {
    switch (action.type) {
        case actions.ITEM_ADDED: {
            const newLastId = 1 + state.lastId;
            return {
                lastId: newLastId,
                items: [
                    ...state.items,
                    {
                        id: newLastId,
                        itemType: action.payload.itemType,
                        xPos: action.payload.xPos,
                        yPos: action.payload.yPos,
                        name: action.payload.name,
                        varAny: action.payload.any
                    }
                ]
            };
        }
        case actions.ITEM_DELETED:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case actions.ITEM_RENAMED:
            return {
                ...state,
                items: state.items.map(item => item.id !== action.payload.id ? item : { ...item, name: action.payload.name })
            }
        case actions.ITEM_MOVING:
            return {
                ...state,
                items: state.items.map(item => item.id !== action.payload.id ? item : {
                    ...item, xPos: action.payload.xPos, yPos: action.payload.yPos
                })
            }
        default:
            return state;
    }
}
