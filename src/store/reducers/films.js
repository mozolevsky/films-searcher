import * as actionCreators from '../actions';

const initialState = {
    filmsData: [],
    notFound: false,
    currentPage: null,
    currentFilmData: {
        Title: '',
        Poster: '',
        Type: '',
        Genre: '',
        imdbRating: '',
        Year: '',
        Writer: ''
    }
};

const filmsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionCreators.ADD_FILMS:
            if (!action.filmsData.data) {
                return {
                    ...state,
                    filmsData: [],
                    notFound: true
                }
            }

            let newFilmsData = action.filmsData.data.map(film => {
                return {
                    year: film.Year,
                    poster: film.Poster,
                    title: film.Title,
                    id: film.imdbID
                }
            });

            return {
                ...state,
                currentPage: action.filmsData.currentPage,
                currentFilmData: {
                    ...state.currentFilmData
                },
                filmsData: newFilmsData,
                notFound: false
            }
        case actionCreators.SET_CURRENT_FILM_DATA:
            return {
                ...state,
                currentFilmData: {
                    ...action.currentFilmData
                }
            }
        default:
            return state;
    }
}

export default filmsReducer;
