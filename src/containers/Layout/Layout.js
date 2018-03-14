import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Search from '../../components/Header/Search/Search';
import FilmsList from '../../components/FilmsList/FilmsList';
import classes from './Layout.css';

class Layout extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header>
                    <Search/>
                </Header>
                <main className={classes.Container}>
                    <FilmsList/>
                </main>
            </Fragment>
        )
    }
}

export default Layout;