/**
 * API and Render url defined
 */

const getBaseUrl = () => {
    let env = process.env.REACT_APP_STAGE;
    switch (env) {
        case 'dev':
            return 'http://localhost:8888/';
        case 'beta':
            return 'https://pantry-finder-api.beta.freshtrak.com/';
        case 'staging':
            return 'http://api-freshtrak.inapp.com/';
        case 'production':
            return 'http://api-freshtrak.inapp.com/';
        default:
            return 'http://localhost:8888/';
    }
};

export const BASE_URL = getBaseUrl();
export const API_URL = {
    EVENTS_LIST : BASE_URL + 'api/agencies',
    FOODBANK_LIST : BASE_URL + 'api/foodbanks',
    EVENT_URL : BASE_URL + 'events'
};

export const RENDER_URL = {
    HOME_URL: '/',
    EVENT_LIST_URL:'/events/list'
};
