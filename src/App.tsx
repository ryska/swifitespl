import React from 'react';
import './App.scss';
import Toolbar from './Toolbar/Toolbar';
import Item from './Item/Item';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <div className='items'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default App;
