import React, { Fragment } from 'react';
import FilmsList from '../../components/FilmsList/FilmsList';
import Pagination from '../../containers/Pagination/Pagination';


const filmsArea = props => (
    <Fragment>
        <FilmsList />
        <Pagination />
    </Fragment>
);

export default filmsArea;