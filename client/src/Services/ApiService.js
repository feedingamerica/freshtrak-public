//API call services will come here

import {getItemLocalStorage, showMessage} from '../Utils/Util';
import {STATUS_CODES} from '../Utils/Constants';
import axios from 'axios';
import { ajaxGet } from './Http/Ajax';

export const webService = async (url,type,options)=>{
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }
    switch(type){
        case 'get': 
        return await axios.get(`${baseUrl}${url}`).then((res)=>{return res.data}).catch(error=>{return error}); 
        break;
        case 'post': 
        return await axios.post(`${baseUrl}${url}`,options).then((res)=>{return res}).catch(error=>{return error}); 
        break;
        case 'put': 
        return await axios.get(`${baseUrl}${url}`,options).then((res)=>{return res.data}).catch(error=>{return error}); 
        break;
        case 'delete': 
        return await axios.get(`${baseUrl}${url}`).then((res)=>{return res.data}).catch(error=>{return error}); 
        break;

        default:
        return "type not specified"

    }
}