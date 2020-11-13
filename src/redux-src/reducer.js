import * as actions from './ActionCreators';

const initial = {
    lastId: 0,
    items: []
}

export default function reducer(state = initial, action) {
    switch (action.type) {
        case actions.ITEM_ADDED: {
            const newLastId = ++state.lastId;
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
        case actions.ITEM_RENAME:
            return {
                ...state,
                items: state.items.map(item => item.id !== action.payload.id ? item : { ...item, name: action.payload.name })
            }
        default:
            return state;
    }
}