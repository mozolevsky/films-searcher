import React from 'react';
import FilmListItem from './FilmsListItem/FilmsListItem';
import { Link } from 'react-router-dom';
import classes from './FilmsList.css';


const filmsList = props => {
    return (
        <section className={classes.FilmsGrid}>
            {
                props.films.map(film => {
                    return (
                        <Link 
                            to={`/movie/${film.id}`} 
                            key={film.id}
                            className={classes.Link}
                        >
                            <FilmListItem
                                title={film.title}
                                year={film.year}
                                poster={film.poster}
                            />
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default filmsList;