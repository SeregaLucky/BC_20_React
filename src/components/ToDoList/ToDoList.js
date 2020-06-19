import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const ToDoList = ({ listItems, changeToDo, deleteItem }) => {
  // console.log(listItems);
  // console.log('RENDER ToDoList');

  return (
    <ul>
      {listItems.map(({ id, rools, title, textToDo }) => (
        <ToDoListItem
          key={id}
          id={id}
          rools={rools}
          title={title}
          textToDo={textToDo}
          changeToDo={changeToDo}
          deleteItem={deleteItem}
        />

        // <li key={id}>
        //   <h3>{title}</h3>
        //   <p>{textToDo}</p>

        //   <button
        //     onClick={() => {
        //       console.log('ToDoList CLICK');
        //       deleteItem(id);
        //     }}
        //     type="button"
        //   >
        //     Delete
        //   </button>
        // </li>
      ))}
    </ul>
  );
};

export default ToDoList;
