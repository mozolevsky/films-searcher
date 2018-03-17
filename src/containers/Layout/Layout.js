import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Search from '../Search/Search';
import FilmsList from '../../components/FilmsList/FilmsList';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Layout.css';


class Layout extends PureComponent {

    componentDidUpdate() {
        console.log('[Layout]: props updated');
    }

    render() {
        let filmsArea = <FilmsList films={this.props.films}/>;

        if (this.props.loader) {
            filmsArea = <Spinner />
        }

        if (this.props.notFound) {
            filmsArea = <h3 className={classes.NotFound}>Not found :( Please try again</h3>
        }

        return (
            <Fragment>
                <Header>
                    <Search/>
                </Header>
                <main className={classes.Container}>
                    {filmsArea}
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        films: state.filmsData,
        notFound: state.notFound,
        loader: state.activeLoader
    }
}

export default connect(mapStateToProps)(Layout);