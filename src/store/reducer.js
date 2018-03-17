import * as actionType from './actions';

const initialState = {
    filmsData: [],
    notFound: false,
    activeLoader: false,
    currentFilmId: null
}

const reducer = (state = initialState, action) => {
    if (action.type === actionType.ADD_FILMS) {

        if (!action.filmsData) {
            return {
                ...state,
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
            filmsData: newFilmsData,
            notFound: false
        }
    }

    if (action.type === actionType.SWITCH_LOADER) {
        return {
            ...state, 
            activeLoader: !state.activeLoader
        }
    }

    if (action.type === actionType.SET_CURRENT_FILM_ID) {
        return {
            ...state,
            currentFilmId: action.currentFilmId
        }
    }

    return state;
}

export default reducer;