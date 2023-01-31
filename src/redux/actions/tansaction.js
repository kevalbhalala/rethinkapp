import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
// import { multiItemValue, readData, saveData } from '../../utils/storage';

export function getTransaction() {
    return async dispatch => {
        return await apiInstance
            .get(`transactions/posted?account_id=${constants.checking_account_id}`)
            .then(res => {
                if (res?.status === 200) {
                    // setToken(res.data.result.token);
                    // saveData(constants.LOGIN_TOKEN, res.data.result.token);
                    // saveData(constants.REFRESH_TOKEN, res.data.result.refreshToken);
                    return dispatch({
                        type: constants.GETTRANSACTION,
                        payload: res.data?.result,
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


export default {
    getTransaction,
};
