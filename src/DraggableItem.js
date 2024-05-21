
import React from 'react';

const DraggableItem = ({ item, handleDragStart }) => {
  return (
    <div 
      draggable 
      onDragStart={(e) => handleDragStart(e, item)}
      className="draggable-item"
    >
      {item}
    </div>
  );
};

export default DraggableItem;
