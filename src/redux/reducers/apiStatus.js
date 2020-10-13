import {
  SET_PROCESSING_TRUE,
  SET_PROCESSING_FALSE,
} from '../actionCreators/apiStatus';

const initialState = {
  error: {
    message: '',
  },
  isProcessing: false
};

const apiStatus = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROCESSING_TRUE:
      return {
        ...initialState,
        isProcessing: true
      };
    case SET_PROCESSING_FALSE:
      return {
        ...initialState,
        isProcessing: false
      };
    default:
      return state;
  }
};

export default apiStatus;
