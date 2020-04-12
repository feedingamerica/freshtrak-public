import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const initToasterContainer = () => {
    this.options = {
        hideProgressBar: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        enter: "fadeIn",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
};

export const showMessage = (type, message) => {
    switch (type) {
        case 'success' :
            toast.success(message, initToasterContainer);
            break;
        case 'error' :
            toast.error(message, initToasterContainer);
            break;
        default :
            toast.warn(message, initToasterContainer);
            break;
    }
};


export const confirm = (title, successFn, object) => {
    let response;
    Swal.fire({
        title: title,
        icon: 'warning',
        showCancelButton: true
    }).then((result) => {
        if (result.value) {
            successFn(result.value, object);
        } else {
            response = false;
        }
        return response;
    });
};

export const setItemToLocalStorage = (storageKey, storageValue) => {
    return localStorage.setItem(storageKey, JSON.stringify(storageValue));
};

export const getItemLocalStorage = (storageKey) => {
    let key = "" + storageKey;
    return localStorage.getItem(key);
};

export const clearItemsFromLocalStorage = () => {
    return localStorage.clear();
};


