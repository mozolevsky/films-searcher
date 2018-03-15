import * as actionType from './actions';

const initialState = {
    filmsData: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionType.ADD_FILMS) {

        let newFilmsData = action.filmsData.map(film => {
            return {
                year: film.Year,
                poster: film.Poster,
                title: film.Title,
                id: film.imdbID

            }
        });

        return {
            filmsData: newFilmsData
        }
    }

    return state;
}

export default reducer;