import * as actionType from './actions';

const initialState = {
    filmsData: [],
    notFound: false,
    activeLoader: false
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

    return state;
}

export default reducer;