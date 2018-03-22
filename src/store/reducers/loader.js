import * as actionCreators from '../actions';

const loaderReducer = (state = {activeLoader: false}, action) => {
    switch(action.type) {
        case actionCreators.SWITCH_LOADER: 
            return {
                activeLoader: !state.activeLoader
            }
    default:
        return state;
    }
}

export default loaderReducer;