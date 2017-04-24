import {
  LIST_LOAD_FAILED, LIST_LOAD_START, LIST_LOAD_SUCCESS
} from './ActionTypes';
import API from '../Api';

console.log(LIST_LOAD_START);
export const loadList = () => async (dispatch, getState) => {
  try {
    console.log({ type: LIST_LOAD_START });
    dispatch({ type: LIST_LOAD_START });
    const response = await API.get('json1.json');
    const { data, status, message } = response.data;
    if (status) {
      dispatch({ type: LIST_LOAD_SUCCESS, payload: { data } });
    } else {
      dispatch({ type: LIST_LOAD_FAILED, payload: { data: [], error: message } });
    }
  } catch (error) {
    dispatch({ type: LIST_LOAD_FAILED, payload: { data: [], error: error.message } });
  }
};
