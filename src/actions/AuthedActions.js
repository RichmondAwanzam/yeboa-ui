import { arrayOf, normalize } from 'normalizr';
import Cookies from 'js-cookie';
import { navigateTo } from '../actions/NavigatorActions';

import * as types from '../constants/ActionTypes';
import { CLIENT_ID } from '../constants/Config';

const COOKIE_PATH = 'accessToken';
let streamInterval;

const API_URL='http://localhost:8888/yeboa/api'




//function to call dispatch on auth user
function authUser(accessToken, shouldShowStream = true) {
  return dispatch =>
    dispatch(fetchAuthedUser(accessToken, shouldShowStream));
}


//dispatch 0_auth to fetch user
function fetchAuthedUser(accessToken, shouldShowStream) {
  return dispatch =>
    fetch(`//api.soundcloud.com/me?oauth_token=${accessToken}`)
      .then(response => response.json())
      .then(json => dispatch(receiveAuthedUserPre(accessToken, json, shouldShowStream)))
      .catch(err => { throw err; });
}


export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_PATH);
    if (accessToken) {
      return dispatch(authUser(accessToken, false));
    }
    return null;
  };
}

function initInterval(accessToken) {
  return (dispatch, getState) => {
    streamInterval = setInterval(() => {
      const playlistKey = `stream${AUTHED_PLAYLIST_SUFFIX}`;
      const { playlists } = getState();
      const streamPlaylist = playlists[playlistKey];

      if (streamPlaylist.futureUrl) {
        dispatch(fetchNewStreamSongs(streamPlaylist.futureUrl, accessToken));
      } else {
        clearInterval(streamInterval);
      }
    }, 60000);
  };
}

export function loginUser(loginData) {
  console.log('login data',loginData)
  return dispatch => {

    return fetch(`${API_URL}/users/login`, {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    
      }),
      method: 'post', body:`login=${loginData.email}&password=${loginData.password}`
    }).then(response => response.json())
      .then(json => {
      
      })
  };

  
}

export function registerUser(registerData) {
   console.log('login data',registerData)
  return dispatch => {

    return fetch(`${API_URL}/users/register`, {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      method: 'post', body:`name=${registerData.name}&email=${registerData.email}&password=${registerData.password}&msisdn=${registerData.msisdn}`
    }).then((response) => {
      console.log('token',response.headers);
      return response.json()})
      .then(json => {
       console.log('response',json);
      })
  };
}

export function checkUserExistences(identifier , type) {
  
  return dispatch => {

    return fetch(`${API_URL}/users/exist?identifier=${identifier}&type=${type}`, {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      method: 'get'
    }).then(response => response.json())
      .then(json => {
      console.log(json);
      dispatch(receiveUserExists(json.exist))
      })
  };
}

export function logoutUser() {
  return (dispatch, getState) => {
    Cookies.remove(COOKIE_PATH);
    const { authed, entities, navigator } = getState();
    const { path } = navigator.route;
    const playlists = authed.playlists.map((playlistId) =>
      entities.playlists[playlistId].title + AUTHED_PLAYLIST_SUFFIX
    );

    clearInterval(streamInterval);

    if (path[0] === 'me') {
      dispatch(navigateTo({ path: ['songs'] }));
    }

    return dispatch(resetAuthed(playlists));
  };
}

function receiveAccessToken(accessToken) {
  return {
    type: types.RECEIVE_ACCESS_TOKEN,
    accessToken,
  };
}

function receiveAuthedUserPre(accessToken, user, shouldShowStream) {
  return dispatch => {
    dispatch(receiveAccessToken(accessToken));
    dispatch(receiveAuthedUser(user));
    dispatch(fetchLikes(accessToken));
    dispatch(fetchPlaylists(accessToken));
    dispatch(fetchStream(accessToken));
    dispatch(fetchFollowings(accessToken));
    if (shouldShowStream) {
      dispatch(navigateTo({ path: ['me', 'stream'] }));
    }
  };
}



function receiveAuthedUser(user) {
  return {
    type: types.RECEIVE_AUTHED_USER,
    user,
  };
}

function receiveUserExists(exists) {
  return {
    type: types.RECEIVE_USER_EXISTENCE,
    exists,
  };
}

