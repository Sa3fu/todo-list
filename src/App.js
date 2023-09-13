import React, { useState } from 'react';
import AddTodo from './compnents/User/AddTodo';
import TodoList from './compnents/User/TodoList';

function App() {
  const[todoList , setTodoList] = useState([]); 

  const saveAddHandler = (TodoList) =>{
    setTodoList((prevTodo) => {
      return[...prevTodo,{Todo:TodoList,id:Math.random().toString()}]
    })
  };

  return (
    <div>
     <AddTodo onSaveTodo={saveAddHandler}/>
     <TodoList items={todoList}/>
    </div>
  );
}

export default App;
