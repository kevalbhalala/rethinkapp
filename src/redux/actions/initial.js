import * as constants from '../../utils/constant';

export function getData(value) {
  return async dispatch => {
    return dispatch({
      type: constants.GET_DATA,
      payload: value,
    });
  };
}

export default {getData};
