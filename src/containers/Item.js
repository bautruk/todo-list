import editIcon from '../icons/edit.svg';
import saveIcon from '../icons/diskette.svg';
import cancelIcon from '../icons/cancel.svg';
import trashIcon from '../icons/trash.svg';
import doneIcon from '../icons/done.svg';
import {useState} from 'react';

function Item({_item, onRemove, onSave}) {
  const [inEdit, setInEdit] = useState(false)
  const [item, setItem] = useState({..._item})

  function handleItemChange(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  }

  return (
      <div className="item-wrapper">
        <div className={`item ${item.done ? 'is-done' : ''}`}>
          {inEdit ? (
              <>
                <div className="texts-wrapper">
                  <label>
                    Title:
                    <input className="item-title" onChange={handleItemChange}
                           name="title"
                           value={item.title}/>
                  </label>
                  <label>
                    Description:
                    <input className="item-description"
                           onChange={handleItemChange}
                           name="description"
                           value={item.description}/>
                  </label>
                </div>
                <div className="buttons-wrapper">
                  <button onClick={() => {
                    onSave(item);
                    setInEdit(false)
                  }}><img src={saveIcon}
                          className="app-logo"
                          alt="save"/>
                  </button>
                  <button onClick={() => {
                    setItem(_item);
                    setInEdit(false)
                  }}>
                    <img src={cancelIcon} className="app-logo" alt="cancel"/>
                  </button>
                </div>
              </>
          ) : (
              <>
                <button onClick={() => {
                  _item.done = true
                  setItem(_item)
                }}
                        name="done"
                        value={item.done}
                        disabled={item.done}>
                  <img src={doneIcon}
                       className="app-logo"
                       alt="done"/>
                </button>
                <div className="texts-wrapper">
                  <div className="item-title"><b>{item.title}</b></div>
                  <div className="item-description">{item.description}</div>
                </div>
                <div className="buttons-wrapper">
                  <button onClick={e => setInEdit(true)} disabled={item.done}>
                    <img
                        src={editIcon}
                        className="app-logo"
                        alt="edit"/>
                  </button>
                  <button onClick={onRemove}>
                    <img src={trashIcon} className="app-logo" alt="trash"/>
                  </button>
                </div>
              </>
          )}
        </div>
      </div>
  );
}

export default Item;