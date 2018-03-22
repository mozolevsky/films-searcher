import React, { PureComponent, Fragment } from 'react';
import { 
    Route, 
    Switch, 
    withRouter
} from 'react-router-dom';
import FilmsArea from '../FilmsArea/FilmsArea';
import Header from '../../components/Header/Header';
import Search from '../../containers/Search/Search';
import InfoMessage from '../../components/UI/InfoMessage/InfoMessage';
import FilmCard from '../../containers/FilmCard/FilmCard';
import classes from './Layout.css';
import staticData from '../../staticData';

class Layout extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header>
                    <Search/>
                </Header>
                <main className={classes.Container}>
                    <Switch>
                        <Route exact path="/" component={FilmsArea} />
                        <Route path="/movie/:id" component={FilmCard}/>
                        <Route render={() => <InfoMessage type="Danger">{staticData.notFoundMessage}</InfoMessage>} />
                    </Switch>
                </main>
            </Fragment>
        )
    }
}

export default withRouter(Layout);