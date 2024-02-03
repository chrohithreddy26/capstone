import React, { useState } from 'react';
import './App.css';

const ShoppingListApp = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const clearAllItems = () => {
    setItems([]);
  };

  return (
    <div className="shopping-list">
      <h1>Shopping List App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => deleteItem(index)} className="delete-icon">
              &#10006;
            </span>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <button className="clear-button" onClick={clearAllItems}>
          Clear All Items
        </button>
      )}
    </div>
  );
};

export default ShoppingListApp;
