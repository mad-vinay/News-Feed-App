export const SET_PROCESSING_TRUE = "SET_PROCESSING_TRUE";
export const SET_DATA_FAILED = "SET_DATA_FAILED"
export const SET_PROCESSING_FALSE = "SET_PROCESSING_FALSE"
export const CLEAR_DATA = "CLEAR_DATA"

// handling loader status as per these actions
export const setProcessingTrue = () => {
  return {
    type: SET_PROCESSING_TRUE,
  };
}

export const setProcessingFalse = () => {
  return {
    type: SET_PROCESSING_FALSE
  }
}

