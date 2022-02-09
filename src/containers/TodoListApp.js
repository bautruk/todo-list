import Item from "./Item";
import add from '../icons/plus.svg';
import './TodoListApp.css';
import {testItems} from "../utils/data";
import {useState} from 'react';

function ToDoListApp() {
  const [items, setItems] = useState(testItems);
  const newItem = () => {
    return {
      id: Date.now(),
      title: '',
      description: ''
    }
  }
  const [item, setItem] = useState(newItem());

  function handleItemChange(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  }

  function handleClick() {
    const insertAt = 0;
    const nextItems = [
      ...items.slice(0, insertAt),
      {id: Date.now(), title: item.title, description: item.description},
      ...items.slice(insertAt)
    ];
    setItems(nextItems);
    setItem(newItem());
  }

  return (
      <>
        <h1>
          TODO List
        </h1>
        <div className="item-wrapper">
          <div className="item">
            <div className="texts-wrapper">
              <label className="item-title">
                Title:
                <input
                    name="title"
                    value={item.title}
                    onChange={handleItemChange}
                />
              </label>
              <label className="item-description">
                Description:
                <input
                    name="description"
                    value={item.description}
                    onChange={handleItemChange}
                />
              </label>
            </div>
            <div className="buttons-wrapper">
              <button onClick={handleClick}>
                <img src={add} className="app-logo" alt="add"/>
              </button>
            </div>
          </div>
        </div>
        <div>
          {items.map(item => <Item _item={item}
                                   key={item.id}
                                   onRemove={() => {
                                     setItems(
                                         items.filter(i =>
                                             i.id !== item.id
                                         )
                                     )
                                   }}
                                   onSave={(item) => {
                                     setItems(
                                         items.map((i) => {
                                           if (i.id === item.id) {
                                             return item;
                                           } else {
                                             return i;
                                           }
                                         })
                                     )
                                   }}
                                   onChange={handleItemChange}
          />)}
        </div>
      </>
  );
}

export default ToDoListApp;