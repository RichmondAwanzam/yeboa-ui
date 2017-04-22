import { arrayOf, normalize } from 'normalizr';
import SC from 'soundcloud';
import Cookies from 'js-cookie';
import { navigateTo } from '../actions/NavigatorActions';
import { changePlayingSong } from '../actions/PlayerActions';
import { fetchSongs, receiveSongs } from '../actions/PlaylistsActions';
import * as types from '../constants/ActionTypes';
import { CLIENT_ID } from '../constants/Config';
import { AUTHED_PLAYLIST_SUFFIX } from '../constants/PlaylistConstants';
import { playlistSchema, songSchema, userSchema } from '../constants/Schemas';

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

export function loginUser(shouldShowStream = true) {
  return dispatch => {
    SC.initialize({
      client_id: CLIENT_ID,
      redirect_uri: `${window.location.protocol}//${window.location.host}/api/callback`,
    });

    SC.connect().then(authObj => {
      Cookies.set(COOKIE_PATH, authObj.oauth_token);
      dispatch(authUser(authObj.oauth_token, shouldShowStream));
    })
    .catch(err => { throw err; });
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
