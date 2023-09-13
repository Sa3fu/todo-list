import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddTodo.module.css'

const AddTodo = props => {
    const[enteredTodo , setEnteredTodo] = useState('');
    const[isInputValid , setIsInputValid] = useState(true)

    const submitHandler = event => {
        event.preventDefault();
        if(enteredTodo.trim() === ''){
            setIsInputValid(false);
            return;
        }
        setEnteredTodo('');
        setIsInputValid(true);
        props.onSaveTodo(enteredTodo);
    };

    return(
        <Card className= {`${classes.input} ${!isInputValid ? classes.invalid : ''}`}>
        <form onSubmit={submitHandler}>
        <label htmlFor='add'>Add Todo</label>
        <input id='add' 
        type='text' 
        value={enteredTodo} 
        onChange={(e) => {setEnteredTodo(e.target.value);
        setIsInputValid(true);}} />
            {!isInputValid && <p className={classes.errorMsg}>Please enter a Todo</p>}
        <Button type='submit'>Add</Button>
        </form>
        
        </Card>
    );
};

export default AddTodo;
