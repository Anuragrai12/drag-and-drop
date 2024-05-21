
import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DropZone from './DropZone';
import './App.css';

const App = () => {
  const [itemsA, setItemsA] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [itemsB, setItemsB] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, zoneId) => {
    const item = e.dataTransfer.getData('text/plain');
    if (zoneId === 'A') {
      setItemsA([...itemsA, item]);
      setItemsB(itemsB.filter((i) => i !== item));
      console.log(`${item} moved back to Zone A`);
    } else if (zoneId === 'B') {
      setItemsB([...itemsB, item]);
      setItemsA(itemsA.filter((i) => i !== item));
      console.log(`${item} moved to Zone B`);
    }
  };

  return (
    <div className="app">
      <div className="zone">
        <h2>Zone A</h2>
        <DropZone 
          id="A" 
          items={itemsA} 
          onDrop={handleDrop} 
          handleDragOver={handleDragOver} 
        />
        {itemsA.map((item, index) => (
          <DraggableItem 
            key={index} 
            item={item} 
            handleDragStart={handleDragStart} 
          />
        ))}
      </div>
      <div className="zone">
        <h2>Zone B</h2>
        <DropZone 
          id="B" 
          items={itemsB} 
          onDrop={handleDrop} 
          handleDragOver={handleDragOver} 
        />
      </div>
    </div>
  );
};

export default App;
