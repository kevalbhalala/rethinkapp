import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
// import { multiItemValue, readData, saveData } from '../../utils/storage';

export async function issue_Card(userObj) {
    try {
        const res = await apiInstance.post('cards', userObj);
        return res.data;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function getProductCard() {
    try {
        const res = await apiInstance.get('cards/products');
        return res.data?.card_products;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export function getCard() {
    return async dispatch => {
        return await apiInstance
            .get(`cards`)
            .then(res => {
                if (res?.status === 200) {
                    // setToken(res.data.result.token);
                    // saveData(constants.LOGIN_TOKEN, res.data.result.token);
                    // saveData(constants.REFRESH_TOKEN, res.data.result.refreshToken);
                    return dispatch({
                        type: constants.GETCRAD,
                        payload: res.data?.cards,
                    });
                } else {
                    return res
                }
            })
            .catch(e => {
                return e
            });
    }
}
export async function activate_Card(userObj) {
    try {
        const res = await apiInstance.post('cards/activate', userObj);
        return res.data;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}


export default {
    issue_Card,
    getProductCard,
    getCard
};
