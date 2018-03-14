import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Search.css';
import searchIcon from '../../../images/search-icon.svg';

const search = props => {
    return (
        <form className={classes.Form}>
            <label>
                <input className={classes.Input} type="text" name="filmSearchString" />
            </label>
            <Button>
                <img src={searchIcon} width="16" height="16" alt="search icon"/>
            </Button>
        </form>
    )
}

export default search;