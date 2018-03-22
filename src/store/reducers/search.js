import * as actionCreators from '../actions';

const searchReducer = (state = {searchString: ''}, action) => {
    switch(action.type) {
        case actionCreators.SET_SEARCH_STRING:
        return {
            ...state,
            searchString: action.searchString
        }
    default:
        return state;
    }
}

export default searchReducer;
