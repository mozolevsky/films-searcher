import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './Header.css';
import backArrow from '../../images/left-arrow.svg';

class Header extends PureComponent {
    backHandler = () => {
        this.props.history.goBack();
    }

    render() {
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
            <header className={classes.Header}>
                {backButton}
                {this.props.children}
            </header>
        )
    }
}

export default withRouter(Header);