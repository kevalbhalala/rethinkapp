import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
// import { multiItemValue, readData, saveData } from '../../utils/storage';

export async function signUp(userObj) {
  try {
    const res = await apiInstance.post('user/create', userObj);
    return res.data;
  } catch (err) {
    console.log('signUp_error--->', JSON.stringify(err?.response?.data));
    return err;
  }
}

export function logIn() {
  return async dispatch => {
    return await apiInstance
      .get(`login`)
      .then(res => {
        console.log('-------res', res)
        // if (res?.status === 200) {
        //   // setToken(res.data.result.token);
        //   // saveData(constants.LOGIN_TOKEN, res.data.result.token);
        //   // saveData(constants.REFRESH_TOKEN, res.data.result.refreshToken);
        //   return dispatch({
        //     type: constants.LOGIN,
        //     payload: res.data,
        //   });
        // } else {
        //   return res
        // }
      })
      .catch(e => {
        return e
      });
  };
}

export function getAccountInfo() {
  return async dispatch => {
    return await apiInstance
      .get(`accounts/${constants.checking_account_id}`)
      .then(res => {
        if (res?.status === 200) {
          // setToken(res.data.result.token);
          // saveData(constants.LOGIN_TOKEN, res.data.result.token);
          // saveData(constants.REFRESH_TOKEN, res.data.result.refreshToken);
          return dispatch({
            type: constants.GET_ACCOUNT_INFO,
            payload: res.data,
          });
        } else {
          return res
        }
      })
      .catch(e => {
        return e
      });
  };
}


export function showLoader(data) {
  return async dispatch => {
    return dispatch({
      type: constants.SHOW_LOADER,
      payload: data,
    });
  };
}

export const removeTokens = async () => {
  removeToken();
  // await multiItemValue([
  //   constants.LOGIN_TOKEN,
  //   constants.REFERRAL_CODE,
  //   constants.REFRESH_TOKEN,
  // ]);
};

export default {
  signUp,
  logIn,
};
