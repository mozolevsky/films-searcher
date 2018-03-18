import React, { PureComponent } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Search.css';
import searchIcon from '../../images/search-icon.svg';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
import { withRouter } from 'react-router-dom';

class Search extends PureComponent {
    state = {
        searchString: ''
    }

    componentDidMount() {
        this.filmSearchString.focus();
    }

    searchHandler = (e) => {
        e.preventDefault();

        this.props.history.replace('/');
        this.props.toSwitchLoader();
        
        axios.get(`http://www.omdbapi.com/?apikey=50239c46&s=${this.state.searchString}`)
        .then((response) => {
            
            this.props.toSwitchLoader();
            this.props.addToStore(response.data.Search);
            this.setState({
                searchString: ''
            });
        })
        .catch(function (error) {
            console.log(error);
            this.props.toSwitchLoader();
        });
    }

    handleChangeSearchInput = (e) => {
        this.setState({
            searchString: e.target.value
        });
    }

    render() {
        return (
            <form className={classes.Form} onSubmit={this.searchHandler}>
                <label>
                    <input 
                        className={classes.Input}
                        type="text"
                        name="filmSearchString"
                        autoComplete="off"
                        placeholder="What we'll look for?"
                        value={this.state.searchString}
                        ref={(input) => { this.filmSearchString = input; }}
                        onChange={this.handleChangeSearchInput} 
                    />
                </label>
                <Button fill="White">
                    <img src={searchIcon} width="16" height="16" alt="search icon"/>
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToStore: (data) => dispatch({type: actionType.ADD_FILMS, filmsData: data}),
        toSwitchLoader: () => dispatch({type: actionType.SWITCH_LOADER})
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Search));