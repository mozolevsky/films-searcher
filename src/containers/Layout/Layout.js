import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Search from '../Search/Search';
import FilmsList from '../../components/FilmsList/FilmsList';
import { connect } from 'react-redux';
import classes from './Layout.css';

class Layout extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header>
                    <Search/>
                </Header>
                <main className={classes.Container}>
                    <FilmsList films={this.props.films}/>
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        films: state.filmsData
    }
}

export default connect(mapStateToProps)(Layout);