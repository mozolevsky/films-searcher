import * as actionCreators from './actions';

const initialState = {
    filmsData: [],
    notFound: false,
    activeLoader: false,
    currentFilmData: {
        Title: '',
        Poster: '',
        Type: '',
        Genre: '',
        imdbRating: '',
        Year: '',
        Writer: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionCreators.ADD_FILMS:
            if (!action.filmsData) {
                return {
                    ...state,
                    currentFilmData: {
                        ...state.currentFilmData
                    },
                    filmsData: [],
                    notFound: true
                }
            }

            let newFilmsData = action.filmsData.map(film => {
                return {
                    year: film.Year,
                    poster: film.Poster,
                    title: film.Title,
                    id: film.imdbID
                }
            });

            return {
                ...state,
                currentFilmData: {
                    ...state.currentFilmData
                },
                filmsData: newFilmsData,
                notFound: false
            }
        case actionCreators.SWITCH_LOADER: 
            return {
                ...state,
                currentFilmData: {
                    ...state.currentFilmData
                },
                activeLoader: !state.activeLoader
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

export default reducer;



