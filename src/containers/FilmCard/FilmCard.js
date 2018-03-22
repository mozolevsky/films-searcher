import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import classes from './FilmCard.css';

class FilmPage extends PureComponent {

    componentDidMount() {
        this.props.toSwitchLoader();
        const id = this.props.match.params.id;

        axios.get(`http://www.omdbapi.com/?apikey=50239c46&i=${id}`)
        .then((response) => {
            
            this.props.toSwitchLoader();
            this.props.toSetCurrentFilmData(response.data);
        })
        .catch(function (error) {
            console.log(error);
            this.props.toSwitchLoader();
        });
    }

    render() {
        let pageContent = <Spinner/>
        const imgPlaceholder = 'http://via.placeholder.com/600x800';
        const {
            Title,
            Poster,
            Type,
            Genre,
            imdbRating,
            Year,
            Writer,
            Plot
        } = this.props.filmDetails;

        if (!this.props.loader) {

            pageContent = (
                <section className={classes.FilmCard}>
                    <h2 className={classes.Title}>{Title}</h2>
                    <img className={classes.Img} src={Poster || imgPlaceholder} alt={`The poster for ${Title} film`} />
                    <section className={classes.Content}>
                        <p>Type: {Type}</p>
                        <p>Genre: {Genre}</p>
                        <p>Raiting: {imdbRating}</p>
                        <p>Year: {Year}</p>
                        <p>Writer: {Writer}</p>
                        <p>Plot: {Plot}</p>
                    </section>
                </section>
            )
        }

        return (
            <section>
                {pageContent}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmId: state.filmsReducer.currentFilmId,
        loader: state.loaderReducer.activeLoader,
        filmDetails: state.filmsReducer.currentFilmData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toSwitchLoader: () => dispatch(actionCreators.switchLoader()),
        toSetCurrentFilmData: (filmData) => dispatch(actionCreators.setCurrentFilmData(filmData))
    }
}
                
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmPage));