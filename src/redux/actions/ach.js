import { apiInstance } from '../../httpClient';
import { removeToken, setToken } from '../../httpClient/ClientHelper';
import * as constants from '../../utils/constant';
// import { multiItemValue, readData, saveData } from '../../utils/storage';

export async function achTransfer(userObj) {
    try {
        const res = await apiInstance.post('ach', userObj);
        return res.data;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}
export async function getTransfer() {
    try {
        const res = await apiInstance.get('ach');
        return res.data?.card_products;
    } catch (err) {
        console.log('signUp_error--->', JSON.stringify(err?.response?.data));
        return err;
    }
}


export default {
    achTransfer,
    getTransfer
};
