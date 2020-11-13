import React, { useState } from 'react';

import Menu from './components/menu';
import BuildIcons from './components/build-icons';
import BuildWidgets from './components/build-widgets';

function App() {
  return <Frame />
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
    <BuildIcons />
    <BuildWidgets />
  </div>
}

export default App;
