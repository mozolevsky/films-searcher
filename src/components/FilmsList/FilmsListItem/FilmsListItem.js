import React from 'react';
import Title from '../../UI/Title/Title';
import classes from './FilmsListItem.css';

const filmsListItem = props => {
    return (
        <section className={classes.FilmListItem}>
            <Title filmName={props.title} year={props.year}/>
            <img
            className={classes.Img}
            src={props.poster}
            alt={`Movie ${props.title} poster`} />
        </section>
    )
}

export default filmsListItem;