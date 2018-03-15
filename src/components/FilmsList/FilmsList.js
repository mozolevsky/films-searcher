import React, { Fragment } from 'react';
import FilmListItem from './FilmsListItem/FilmsListItem';

const filmsList = props => {
    console.log(props);

    return (
        <Fragment>
            {
                props.films.map(film => {
                    return <FilmListItem 
                        key={film.id}
                        title={film.title}
                        year={film.year}
                        poster={film.poster}
                    /> 
                })
            }
        </Fragment>
    )
}

export default filmsList;