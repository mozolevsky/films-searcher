export const ADD_FILMS = 'ADD_FILMS';
export const SWITCH_LOADER = 'SWITCH_LOADER';
export const SET_CURRENT_FILM_DATA = 'SET_CURRENT_FILM_DATA';

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


