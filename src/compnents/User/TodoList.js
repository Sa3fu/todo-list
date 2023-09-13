import React from "react";
import Card from "../UI/Card";
import classes from './TodoList.module.css'

const TodoList = (props) => {

    const reversedList = [...props.items].reverse();

    const handleItemHandler = (itemId) => {
        props.onDeleteItem(itemId);
    };

  return (
    <Card className={classes.todo} >
      <ul>
        {reversedList.map((item) => (
          <li key={props.id} onClick={() => {handleItemHandler(item.id)}}>
          {item.Todo}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
