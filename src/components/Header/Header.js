import React from 'react';
import classes from './Header.css';

const header = props => {
    return (
        <header className={classes.Header}>{props.children}</header>
    )
}

export default header;