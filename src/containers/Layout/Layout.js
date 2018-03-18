import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    Route, 
    Switch, 
    withRouter
} from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import Header from '../../components/Header/Header';
import Search from '../Search/Search';
import FilmsList from '../../components/FilmsList/FilmsList';
import InfoMessage from '../../components/UI/InfoMessage/InfoMessage';
import FilmCard from '../FilmCard/FilmCard';
import Button from '../../components/UI/Button/Button';

import backArrow from '../../images/left-arrow.svg';
import classes from './Layout.css';


class Layout extends PureComponent {

    backHandler = () => {
        this.props.history.goBack();
    }

    render() {
        let filmsArea = <FilmsList films={this.props.films}/>;
        if (this.props.loader) {
            filmsArea = <Spinner />
        }

        if (this.props.notFound) {
            filmsArea = <InfoMessage type="Warning">Films weren't found :( Please try again</InfoMessage>
        }

        let backButton = (
            <div className={classes.BackBtnWrapper}>
                <Button clicked={this.backHandler}>
                    <img src={backArrow} width="20" height="20" alt="back icon"/>
                </Button>
            </div>
        );

        if (this.props.location.pathname === '/') {
            backButton = null;
        }

        return (
            <Fragment>
                <Header>
                    {backButton}
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