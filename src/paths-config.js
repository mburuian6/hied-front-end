import { isPersistedState } from "./helpers";

const BASE_URL = 'http://localhost:8080/';
const API_HOME_URL = BASE_URL;

//Auth
const API_SIGN_UP_PATH = '/users';
const API_LOGIN_PATH = '/oauth/token';
const API_LOGOUT_PATH = '/oauth/revoke';

//Content
const API_JOBS_PATH = '/posts';
const API_SEARCH_POSTS_PATH = '/posts/search';
const API_POST_BIDS_PATH = '/bids/open_post_bids';
const API_BIDS_PATH = '/bids';
const API_ACCEPT_BID_PATH = '/bids/accept_bid';
const API_ALL_NOTIFICATIONS_PATH= '/notifications/all_notifications';
const API_MARK_READ_PATH = '/notifications/mark_read';
const API_GET_USER_PATH = '/users/profile';
const API_UPDATE_USER_PATH = '/users/update_profile';
const API_STATS_USER_PATH = '/users/user_statistics';

const headers = new Headers();
headers.append('Content-Type','application/json');
headers.append('Authorization',
  `Bearer ${isPersistedState('authenticationToken')}`);

export {
    BASE_URL,
    API_HOME_URL,
    API_SIGN_UP_PATH,
    API_LOGIN_PATH,
    API_LOGOUT_PATH,
    headers,
    API_JOBS_PATH,
    API_SEARCH_POSTS_PATH,
    API_BIDS_PATH,
    API_POST_BIDS_PATH,
    API_ACCEPT_BID_PATH,
    API_ALL_NOTIFICATIONS_PATH,
    API_MARK_READ_PATH,
    API_GET_USER_PATH,
    API_UPDATE_USER_PATH,
    API_STATS_USER_PATH
}
