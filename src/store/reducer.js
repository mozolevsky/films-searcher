import * as actionType from './actions';

const initialState = {
    filmsData: [],
    notFound: false,
    activeLoader: false,
    currentFilmId: null,
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
    if (action.type === actionType.ADD_FILMS) {

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
    }

    if (action.type === actionType.SWITCH_LOADER) {
        return {
            ...state,
            currentFilmData: {
                ...state.currentFilmData
            },
            activeLoader: !state.activeLoader
        }
    }

    if (action.type === actionType.SET_CURRENT_FILM_DATA) {
        return {
            ...state,
            currentFilmData: {
                ...action.currentFilmData
            },
            currentFilmId: action.currentFilmId
        }
    }

    return state;
}

export default reducer;