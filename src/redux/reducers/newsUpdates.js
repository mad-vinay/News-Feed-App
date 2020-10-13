import {
    DATA_SUCCESS,
    UPDATE_DATA_ON_CHANGE,
    SAVE_NEWS
} from '../actionCreators/newsUpdates';

const initialState = {
    data: ''
};


const topStories = (state = initialState, action) => {
    switch (action.type) {
        case DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
            };
        case UPDATE_DATA_ON_CHANGE:
            return {
                ...state,
                data: action.data
            }
        case SAVE_NEWS:
            return {
                ...state,
                data: action.data
            }
        default:
            return { ...state }
    }
}

export default topStories;