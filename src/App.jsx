import React, { useState } from 'react';

import * as actions from './redux-src/ActionCreators';
import * as builder from './redux-src/ItemManager';

import Menu from './components/menu';

function App() {
  return <Frame />
}

const PrepareWidget = (props) => {
  switch (props.type) {
    case builder.WIDGET_RENAMING:
      return <div className={'widget-container'}>

      </div>
    default:
      return <div>returned null widget</div>;
  }
}

const Frame = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = (event) => {
    setMenuOpen(event.altKey);
    setX(event.screenX);
    setY(event.screenY - 90);
  };

  return <div id={'frame'} onClick={handleClick}>
    {menuOpen ? <Menu xPos={x} yPos={y} /> : null}
    {/* <BuildAll /> */}
  </div>
}

export default App;
