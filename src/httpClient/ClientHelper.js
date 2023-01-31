import Axios from 'axios';
import { apiInstance } from './index';

export function setToken(token) {
  Object.assign(apiInstance.defaults.headers, {
    Authorization: `Bearer ${token}`,
  });
}
export function removeToken() {
  delete apiInstance.defaults.headers.Authorization;
}
export async function handleRequest(request) {
  if (__DEV__) {
    // console.log('REQUEST', request);
  }
  return request;
}
export function handleResponse(value) {
  return value;
}
export async function handleApiError(error) {
  if (Axios.isCancel(error)) {
    console.log('Canceled');
    throw error;
  }
  if (__DEV__) {
    // console.log('handleApiError------>', error);
  }
  if (!error.response) {
    throw error;
  }
  if (error.response.status === 401) {
    return;
  } else if (error.response.status === 500) {
    console.log('Server error has occurred. Please try again later');
    throw error;
  } else {
    // showToast(error.toString());
  }
  throw error;
}
