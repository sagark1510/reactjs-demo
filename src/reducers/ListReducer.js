import {
  LIST_LOAD_FAILED, LIST_LOAD_START, LIST_LOAD_SUCCESS
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  data: [],
  loading: true,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_LOAD_START:
      return { ...state, loading: true, error: null, data: [] };
    case LIST_LOAD_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload.data };
    case LIST_LOAD_FAILED:
      return { ...state, loading: false, error: action.payload.error, data: action.payload.data };
    default:
      return state;
  }
}
