import React from 'react';
import FilmListItem from '../../components/FilmsListItem/FilmsListItem';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
import { Link } from 'react-router-dom';
import classes from './FilmsList.css';


const filmsList = props => {
    return (
        <section className={classes.FilmsGrid}>
            {
                props.films.map(film => {
                    return <Link to={`/movie/${film.id}`}  key={film.id}>
                                <FilmListItem 
                                    title={film.title}
                                    year={film.year}
                                    poster={film.poster}
                                    clicked={() => props.addCurrentFilmId(film.id)}
                                /> 
                            </Link>
                })
            }
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addCurrentFilmId: (id) => dispatch({type: actionType.SET_CURRENT_FILM_ID, currentFilmId: id})
    }
}

export default connect(null, mapDispatchToProps)(filmsList);