/**
 * API and Render url defined
 */

const getBaseUrl = () => {
    let env = process.env.REACT_APP_STAGE;
    switch (env) {
        case 'dev':
            return 'http://localhost:8000/';
        case 'staging':
            return 'http://api-freshtrak.inapp.com/';
        case 'production':
            return 'http://api-freshtrak.inapp.com/';
        default:
            break;
    }
};

export const BASE_URL = getBaseUrl();
export const API_URL = {    
    /*CREATE_EVENT : BASE_URL + 'event/create',
    GET_EVENT_LIST : BASE_URL + 'event/list',
    EVENT_URL : BASE_URL + 'event',
    GET_REG_EVENT : BASE_URL + '/event/list/*/
};

export const RENDER_URL = {
    HOME_URL: '/',
    DASHBOARD_URL: '/dashboard',    
    EVENT_CREATE_URL:'/events/create',
    EVENT_LIST_URL:'/events/list',
    EVENT_EDIT_URL:'/events/:id/edit',
    EVENT_CONFIRM_URL:'/events/:id/confirm',
    ADD_FAMILY_URL: '/family/create',
    AUTHENTICATED_USER_URL:'/user'
};