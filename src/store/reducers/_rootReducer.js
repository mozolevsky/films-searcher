import { combineReducers } from 'redux';
import loaderReducer from './loader';
import filmsReducer from './films';
import searchReducer from './search';

const rootReducer = combineReducers({
    loaderReducer,
    filmsReducer,
    searchReducer
});


export default rootReducer;