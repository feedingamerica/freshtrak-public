import {getItemLocalStorage, showMessage} from '../../Utils/Util';
import {STATUS_CODES} from '../../Utils/Constants';
import axios from 'axios';

    export const ajaxGet = (url, successFn, Failfn, options) =>  {
        axios.get(url, {
            headers: { "Authorization": "Bearer " + JSON.parse(getItemLocalStorage('token')) }
        }).then((response) => {
            if (response) {
                successFn(response.data);
            } else {
                Failfn(response.data)
            }
        }).catch(error => errorHandling(error));
    };

    export const ajaxPost = (url, data, successFn, Failfn, options) => {
        axios.post(url, data, {
            headers: { "Authorization": "Bearer " + JSON.parse(getItemLocalStorage('token')) }
        }).then((response) => {
            if (response) {
                successFn(response.data);
            } else {
                Failfn(response.data);
            }
        }).catch(error => errorHandling(error));
    };

    export const ajaxPut = (url, data, successFn, Failfn, options) => {
        axios.put(url, data, {
            headers: { "Authorization": "Bearer " + JSON.parse(getItemLocalStorage('token')) }
        }).then((response) => {
            if (response) {
                successFn(response.data);
            } else {
                Failfn(response.data)
            }
        }).catch(error => errorHandling(error));
    };

    export const ajaxDestroy = (url, successFn, Failfn, options) => {
        axios.delete(url, {
            headers: { "Authorization": "Bearer " + JSON.parse(getItemLocalStorage('token')) }
        }).then((response) => {
            if (response) {
                successFn(response.data);
            } else {
                Failfn(response.data)
            }
        }).catch(error => errorHandling(error));
    };

    const errorHandling = (error) => {
         if (error.response.status === STATUS_CODES.HTTP_403 || error.response.status === STATUS_CODES.HTTP_500) {
            showMessage('error', error.response.showMessage);
        } else if (error.response.status === STATUS_CODES.HTTP_400 || error.response.status === STATUS_CODES.HTTP_501) {
            showMessage('warning', error.response.data.message);
        } else if (error.response.status === STATUS_CODES.HTTP_409 || error.response.status === STATUS_CODES.HTTP_422 || error.response.status === STATUS_CODES.HTTP_404) {
            showMessage('error', error.response.data.message);
        } else if (error.response.status === STATUS_CODES.HTTP_401) {

        } else {
            showMessage('error', 'Some network error occurred');
         }
    };