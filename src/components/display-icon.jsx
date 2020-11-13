import React from 'react';

const DisplayIcon = (props) => {
    return <div id={props.id} className={'icon-container'} style={{ left: props.xPos, top: props.yPos }}>
        <img src={props.icon} alt={'icon ' + props.type} />
        <p>{props.name}</p>
    </div>
}

export default DisplayIcon;