import React, { PureComponent } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Search.css';
import searchIcon from '../../images/search-icon.svg';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import { withRouter } from 'react-router-dom';
import staticData from '../../staticData';

class Search extends PureComponent {
    componentDidMount() {
        this.filmSearchString.focus();
    }

    searchHandler = (e) => {
        e.preventDefault();

        this.props.history.replace('/');
        this.props.toSwitchLoader();
        
        axios.get(`http://www.omdbapi.com/?apikey=50239c46&s=${this.props.searchString}`)
        .then((response) => {
            this.props.toSwitchLoader();
            this.props.addToStore(response.data.Search);
            
            this.props.history.push(`/?search=${this.props.searchString}&page=1`);
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

        this.props.saveSearchString(e.target.value);
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
                        placeholder={staticData.searchPlaceholder}
                        value={this.props.searchString}
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

const mapStateToProps = state => {
    return {
        searchString: state.searchReducer.searchString
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToStore: (data) => dispatch(actionCreators.addFilms(data)),
        toSwitchLoader: () => dispatch(actionCreators.switchLoader()),
        saveSearchString: (string) => dispatch(actionCreators.setSearchString(string))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));