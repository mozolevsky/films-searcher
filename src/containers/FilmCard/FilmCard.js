import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class FilmPage extends PureComponent {
    state = {
        currentFilmDetails: null
    }

    componentDidMount() {
        this.props.toSwitchLoader();

        axios.get(`http://www.omdbapi.com/?apikey=50239c46&i=${this.props.filmId}`)
        .then((response) => {
            
            this.props.toSwitchLoader();
            this.setState({
                currentFilmDetails: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let pageContent = <Spinner/>

        if (!this.props.loader) {
            pageContent = <p>{this.props.filmId}</p>
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
        filmId: state.currentFilmId,
        loader: state.activeLoader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toSwitchLoader: () => dispatch({type: actionType.SWITCH_LOADER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);