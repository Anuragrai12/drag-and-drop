
import React from 'react';

const DropZone = ({ items, onDrop, id, handleDragOver }) => {
  return (
    <div 
      className="dropzone"
      onDrop={(e) => onDrop(e, id)}
      onDragOver={handleDragOver}
    >
      {items.map((item, index) => (
        <div key={index} className="dropzone-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropZone;
