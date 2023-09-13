import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddTodo.module.css'

const AddTodo = props => {
    const[enteredTodo , setEnteredTodo] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        setEnteredTodo('');
    };

    return(
        <Card className= {classes.input}>
        <form onSubmit={submitHandler}>
        <label htmlFor='add'>Add Todo</label>
        <input id='add' type='text' value={enteredTodo} onChange={(e) => {setEnteredTodo(e.target.value)}}/>
        <Button type='submit'>Add</Button>
        </form>
        
        </Card>
    );
};

export default AddTodo;
