import React, { PureComponent, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Search from '../Search/Search';
import FilmsList from '../FilmsList/FilmsList';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Layout.css';
import { Route, Switch, withRouter} from 'react-router-dom';
import InfoMessage from '../../components/UI/InfoMessage/InfoMessage';
import FilmCard from '../FilmCard/FilmCard';


class Layout extends PureComponent {
    render() {
        let filmsArea = <FilmsList films={this.props.films}/>;

        if (this.props.loader) {
            filmsArea = <Spinner />
        }

        if (this.props.notFound) {
            filmsArea = <InfoMessage type="Warning">Films weren't found :( Please try again</InfoMessage>
        }

        return (
            <Fragment>
                <Header>
                    <Search/>
                </Header>
                <main className={classes.Container}>
                    <Switch>
                        <Route exact path="/" render={() => filmsArea} />
                        <Route path="/movie/:id" component={FilmCard}/>
                        <Route render={() => <InfoMessage type="Danger">Page wasn't found</InfoMessage>} />
                    </Switch>
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

export default withRouter(connect(mapStateToProps)(Layout));