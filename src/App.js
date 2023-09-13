import React, { useState } from 'react';
import AddTodo from './compnents/User/AddTodo';
import TodoList from './compnents/User/TodoList';

function App() {
  const[todoList , setTodoList] = useState([]); 

  const saveAddHandler = (TodoList) =>{
    setTodoList((prevTodo) => {
      return[...prevTodo,{Todo:TodoList,id:Math.random().toString()}]
    });
  };

  const deleteItemHandler = (itemId) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((item) => item.id !== itemId);
    });
  };

  return (
    <div>
     <AddTodo onSaveTodo={saveAddHandler}/>
     <TodoList items={todoList} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;
