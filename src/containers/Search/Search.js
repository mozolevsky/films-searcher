import React, { PureComponent } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Search.css';
import searchIcon from '../../images/search-icon.svg';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

class Search extends PureComponent {
    state = {
        searchString: ''
    }

    componentDidMount() {
        this.filmSearchString.focus();
    }

    searchHandler = (e) => {
        e.preventDefault();
        
        axios.get(`http://www.omdbapi.com/?apikey=50239c46&s=${this.state.searchString}`)
        .then((response) => {
            this.props.addToStore(response.data.Search);
        })
        .catch(function (error) {
            console.log(error);
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
                        value={this.state.searchString}
                        ref={(input) => { this.filmSearchString = input; }}
                        onChange={this.handleChangeSearchInput} 
                    />
                </label>
                <Button>
                    <img src={searchIcon} width="16" height="16" alt="search icon"/>
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToStore: (data) => dispatch({type: actionType.ADD_FILMS, filmsData: data}),
    }
}

export default connect(null, mapDispatchToProps)(Search);