import React from 'react';
import Title from '../../UI/Title/Title';
import classes from './FilmsListItem.css';

const filmsListItem = props => {
    return (
        <section>
            <Title filmName="Seven" year="1997"/>
            <img
            className={classes.Img}
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SX300.jpg" alt="" />
        </section>
    )
}

export default filmsListItem;