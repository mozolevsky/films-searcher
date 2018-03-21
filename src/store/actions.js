export const ADD_FILMS = 'ADD_FILMS';
export const SWITCH_LOADER = 'SWITCH_LOADER';
export const SET_CURRENT_FILM_DATA = 'SET_CURRENT_FILM_DATA';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';

export const addFilms = data => ({
    type: ADD_FILMS,
    filmsData: data
});

export const switchLoader = () => ({
    type: SWITCH_LOADER
});

export const setCurrentFilmData = filmData => ({
    type: SET_CURRENT_FILM_DATA,
    currentFilmData: filmData
});

export const setSearchString = string => ({
    type: SET_SEARCH_STRING,
    searchString: string
});


