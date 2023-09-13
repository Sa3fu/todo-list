import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    return <di className={`${classes.card} ${props.className}`}>{props.children}</di>
};

export default Card;