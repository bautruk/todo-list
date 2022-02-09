import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListApp from "./containers/TodoListApp";

ReactDOM.render(
  <React.StrictMode>
    <TodoListApp />
  </React.StrictMode>,
  document.getElementById('root')
);
