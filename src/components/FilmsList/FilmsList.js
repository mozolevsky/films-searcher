import React from 'react';
import { connect } from 'react-redux';
import FilmListItem from './FilmsListItem/FilmsListItem';
import { Link } from 'react-router-dom';
import InfoMessage from '../UI/InfoMessage/InfoMessage';
import Spinner from '../UI/Spinner/Spinner';
import staticData from '../../staticData';
import classes from './FilmsList.css';


const filmsList = props => {
    let filmsArea = <InfoMessage>{staticData.filmsListEmpty}</InfoMessage>;

    if (!!props.films.length) {
        filmsArea = (
            <section className={classes.FilmsGrid}>
                {
                    props.films.map(film => (
                        <Link 
                            to={`/movie/${film.id}`} 
                            key={film.id}
                            className={classes.Link}>
                            <FilmListItem
                                title={film.title}
                                year={film.year}
                                poster={film.poster}/>
                        </Link>
                    ))
                }
            </section>
        )
    }

    if (props.loader) {
        filmsArea = <Spinner />
    }

    if (props.notFound) {
        filmsArea = <InfoMessage type="Warning">{staticData.emptyResults}</InfoMessage>
    }

    return filmsArea;
}

const mapStateToProps = state => {
    return {
        films: state.filmsReducer.filmsData,
        notFound: state.filmsReducer.notFound,
        loader: state.filmsReducer.activeLoader
    }
}

export default connect(mapStateToProps)(filmsList);