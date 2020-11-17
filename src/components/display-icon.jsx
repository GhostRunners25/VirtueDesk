import React from 'react';
import { useDispatch } from 'react-redux';

import { ItemMoving } from '../redux-src/ActionCreators';

const DisplayIcon = (props) => {
    const dispatch = useDispatch();

    const IconStyle = {
        left: props.xPos,
        top: props.yPos,
    }

    const startDrag = (event) => {
    }

    const endDrag = (event) => {
        const offsetX = event.screenX - 80;
        const offsetY = event.screenY - 90 - 80;
        dispatch(ItemMoving(props.id, offsetX, offsetY));
    }

    return <button className={'icon-container'} style={IconStyle} id={props.id} draggable={true} onDragStart={startDrag} onDragEnd={endDrag}>
        <img src={props.icon} alt={'icon ' + props.type} draggable={false} />
        <p>{props.name}</p>
    </button>
}

export default DisplayIcon;