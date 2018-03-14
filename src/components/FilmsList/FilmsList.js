import React, { Fragment } from 'react';
import FilmListItem from './FilmsListItem/FilmsListItem';

const filmsList = props => {
    return (
        <Fragment>
            <FilmListItem />
            <FilmListItem />
            <FilmListItem />
            <FilmListItem />
        </Fragment>
    )
}

export default filmsList;