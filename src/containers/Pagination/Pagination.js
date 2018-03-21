import React, { PureComponent } from 'react';
import classes from './Pagination.css';

class Pagination extends PureComponent {
    render() {
        return (
            <footer className={classes.PaginationContainer}>
                <nav className={classes.PaginationButtonsArea}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                </nav>
                <p className={classes.PaginationTotal}>Total pages: 100</p>
            </footer>
        )
    }
}

export default Pagination;