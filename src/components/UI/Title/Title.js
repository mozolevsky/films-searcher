import React from 'react';
import classes from './Title.css';

const title = props => {
    return (
        <section className={classes.TitleBlock}>
            <h3 className={classes.Title}>{props.filmName}</h3>
            <p className={classes.Date}>({props.year})</p>
        </section>
    )
}

export default title;