import React from "react";
import Card from "../UI/Card";
import classes from './TodoList.module.css'

const TodoList = (props) => {
  return (
    <Card className={classes.todo} >
      <ul>
        {props.items.map((item) => (
          <li>
          {item.Todo}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
