import React from 'react';
import classes from './InfoMessage.css';


const infoMessage = props => <h3 className={`${classes.InfoMessage} ${classes[props.type]}`}>{props.children}</h3>;

export default infoMessage;