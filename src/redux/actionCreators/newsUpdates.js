import {
    setProcessingTrue,
    setProcessingFalse
} from './apiStatus';
export const DATA_SUCCESS = "DATA_SUCCESS";
export const UPDATE_DATA_ON_CHANGE = 'UPDATE_DATA_ON_CHANGE';
export const SAVE_NEWS = 'SAVE_NEWS'

// base url
const NYTBaseUrl = "https://api.nytimes.com/svc/search/v2/";
const ApiKey = "a69e1cdbb16b4f23841c8f01be77f31a";

// updating store if API returns success
export const setDataSuccess = (data) => {
    return {
        type: DATA_SUCCESS,
        data
    }
}

// updating store based on thier action
export const updateData = (data) => {
    return {
        type: UPDATE_DATA_ON_CHANGE,
        data
    }
}

// updating store on a specific news click
export const saveNewsOnSelection = (data) => {
    return {
        type: SAVE_NEWS,
        data
    }
}

export const fetchNews = () => {
    return async (dispatch) => {
        dispatch(setProcessingTrue());
        return fetch(NYTBaseUrl + "articlesearch.json?api-key=" + ApiKey)
            .then((res) => res.json())
            .then((json) => {
                dispatch(setProcessingFalse());
                dispatch(setDataSuccess(json.response.docs));
                return json.response.docs
            })
            .catch(() => {
                dispatch(setProcessingFalse());
                return null
            })
    }
}