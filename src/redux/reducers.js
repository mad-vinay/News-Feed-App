import { combineReducers } from 'redux';
import topStories from './reducers/newsUpdates';
import apiStatus from './reducers/apiStatus';

// all reducers are listing here
const reducers = combineReducers({
    topStories,
    apiStatus
});

export { reducers };
