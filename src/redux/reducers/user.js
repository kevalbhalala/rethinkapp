import * as constants from '../../utils/constant';

export default function user(state = {}, action) {
  switch (action.type) {
    case constants.SIGN_UP:
      return {
        ...state,
        loader: false,
        register: action.payload,
      };
    case constants.LOGIN:
      return {
        ...state,
        loader: false,
        login: action.payload,
      };
    case constants.SHOW_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case constants.GET_ACCOUNT_INFO:
      return {
        ...state,
        accountInfo: action.payload,
      };
    case constants.GETTRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case constants.GETCRAD:
      return {
        ...state,
        getCard: action.payload,
      };
    case constants.SIGN_OUT:
      return {
        ...state,
        login: {},
        register: {},
        loader: false,
        accountInfo: {},
        transaction: [],
        getCrad: []
      };
  }
  return state;
}
